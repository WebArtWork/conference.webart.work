import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { DeviceIdService } from '../../../conference/device-id.service';
import { EventService } from '../../../conference/event/event.service';
import { PollService, PollAnswerService } from '../../../conference/poll/poll.service';
import { QuestionService } from '../../../conference/question/question.service';
import { QuizService, QuizAnswerService } from '../../../conference/quiz/quiz.service';
import { DemoAnswerStore } from '../event-demo-answer.store';
import { DemoQuestionStore } from '../event-demo-question.store';
import { DEMO_EVENT, DEMO_EVENT_SLUG, DEMO_POLLS, DEMO_QUIZZES } from '../event-demo.data';

/**
 * Public event page: `event/:slug`. One link, one page — visitors ask/like
 * questions and answer active polls/quizzes. No account required. Never
 * reads owner-only analytics (poll/quiz results) — that data has no code
 * path here at all.
 */
@Component({
	selector: 'app-event-public',
	imports: [
		ButtonModule,
		CardModule,
		DialogModule,
		InputTextModule,
		RadioButtonModule,
		TagModule,
		FormsModule,
		TranslateDirective,
	],
	templateUrl: './event-public.component.html',
	styleUrl: './event-public.component.scss',
})
export class EventPublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _eventService = inject(EventService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	private readonly _quizAnswerService = inject(QuizAnswerService);
	private readonly _metaService = inject(MetaService);
	private readonly _demoQuestionStore = inject(DemoQuestionStore);
	private readonly _demoAnswerStore = inject(DemoAnswerStore);
	readonly deviceIdService = inject(DeviceIdService);

	readonly slug = input.required<string>();

	/**
	 * Falls back to the public showcase event when the slug is `test-1` and no
	 * real backend event exists there yet — this is the landing page's "Try
	 * yourself as an organizer" link, reachable by anonymous visitors with no
	 * event of their own to view.
	 */
	readonly event = computed(
		() => this._eventService.bySlug(this.slug()) ?? (this.slug() === DEMO_EVENT_SLUG ? DEMO_EVENT : null),
	);
	readonly isLive = computed(() => this.event()?.state === 'live');
	readonly isDemoEvent = computed(() => this.event()?.slug === DEMO_EVENT_SLUG);

	readonly questions = computed(() => {
		const eventDoc = this.event();
		if (!eventDoc) {
			return [];
		}
		return this.isDemoEvent() ? this._demoQuestionStore.questions() : this._questionService.byEvent(eventDoc._id);
	});
	/** The demo event always shows its fixed showcase polls, regardless of any real poll data — same reasoning as `questions` above. */
	readonly polls = computed(() => {
		const eventDoc = this.event();
		if (!eventDoc) {
			return [];
		}
		return this.isDemoEvent() ? DEMO_POLLS : this._pollService.byEvent(eventDoc._id);
	});
	readonly quizzes = computed(() => {
		const eventDoc = this.event();
		if (!eventDoc) {
			return [];
		}
		return this.isDemoEvent() ? DEMO_QUIZZES : this._quizService.byEvent(eventDoc._id);
	});
	readonly activePolls = computed(() => this.polls().filter((poll) => poll.active));
	readonly activeQuizzes = computed(() => this.quizzes().filter((quiz) => quiz.active));

	readonly newQuestionText = signal('');

	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	/** `null` when not taking the poll; otherwise the snapshot of poll ids still to answer, walked one at a time inline. */
	readonly pollFlowIds = signal<string[] | null>(null);
	readonly pollFlowIndex = signal(0);
	readonly selectedPollOption = signal<number | null>(null);
	readonly currentPoll = computed(() => {
		const ids = this.pollFlowIds();
		const id = ids ? ids[this.pollFlowIndex()] : undefined;
		return id ? (this.polls().find((poll) => poll._id === id) ?? null) : null;
	});
	readonly pollFlowPosition = computed(() => this.pollFlowIndex() + 1);
	readonly pollFlowTotal = computed(() => this.pollFlowIds()?.length ?? 0);
	readonly pollFlowFinished = computed(() => {
		const ids = this.pollFlowIds();
		return ids !== null && this.pollFlowIndex() >= ids.length;
	});
	readonly allPollsAnswered = computed(() => this.activePolls().every((poll) => this.hasAnsweredPoll(poll._id)));
	/** Guards the auto-open effect below so it only fires once per page load, not every time the flow is closed. */
	private readonly _pollFlowAutoStarted = signal(false);

	/** Same idea as the poll flow above, for quizzes (plus the reveal-answer pause). */
	readonly quizFlowIds = signal<string[] | null>(null);
	readonly quizFlowIndex = signal(0);
	readonly selectedQuizOption = signal<number | null>(null);
	readonly quizRevealed = signal(false);
	readonly currentQuiz = computed(() => {
		const ids = this.quizFlowIds();
		const id = ids ? ids[this.quizFlowIndex()] : undefined;
		return id ? (this.quizzes().find((quiz) => quiz._id === id) ?? null) : null;
	});
	readonly quizFlowPosition = computed(() => this.quizFlowIndex() + 1);
	readonly quizFlowTotal = computed(() => this.quizFlowIds()?.length ?? 0);
	readonly quizFlowFinished = computed(() => {
		const ids = this.quizFlowIds();
		return ids !== null && this.quizFlowIndex() >= ids.length;
	});
	readonly allQuizzesAnswered = computed(() => this.activeQuizzes().every((quiz) => this.hasAnsweredQuiz(quiz._id)));
	/** Guards the auto-open effect below so it only fires once per page load, not every time the flow is closed. */
	private readonly _quizFlowAutoStarted = signal(false);

	constructor() {
		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});

		// Polls/quizzes open expanded by default — one at a time, in the same
		// "1/2" flow-card format the lecture page uses — as soon as there's
		// something unanswered to show.
		effect(() => {
			if (this._pollFlowAutoStarted() || this.pollFlowIds() !== null) {
				return;
			}
			if (this.activePolls().some((poll) => !this.hasAnsweredPoll(poll._id))) {
				this._pollFlowAutoStarted.set(true);
				this.goToPolls();
			}
		});

		effect(() => {
			if (this._quizFlowAutoStarted() || this.quizFlowIds() !== null) {
				return;
			}
			if (this.activeQuizzes().some((quiz) => !this.hasAnsweredQuiz(quiz._id))) {
				this._quizFlowAutoStarted.set(true);
				this.goToQuizzes();
			}
		});

		// Once every poll/quiz in the flow is answered, fold back to the plain
		// "Answered" tag instead of leaving an empty flow card on screen.
		effect(() => {
			if (this.pollFlowFinished()) {
				this.pollFlowIds.set(null);
				this.pollFlowIndex.set(0);
			}
		});

		effect(() => {
			if (this.quizFlowFinished()) {
				this.quizFlowIds.set(null);
				this.quizFlowIndex.set(0);
			}
		});

		// Shareable event links get posted before anyone joins, so the page's
		// own title/description/OG tags should reflect this specific event,
		// not the generic static route title.
		effect(() => {
			const eventDoc = this.event();
			if (!eventDoc) {
				return;
			}

			this._metaService.applyMeta({
				title: eventDoc.speaker ? `${eventDoc.title} — ${eventDoc.speaker}` : eventDoc.title,
				description: eventDoc.description || undefined,
			});
		});

		effect(() => {
			const eventDoc = this.event();
			if (!eventDoc) {
				return;
			}

			if (!this.isDemoEvent()) {
				this._questionService.loadEvent(eventDoc._id);
				this._pollService.loadEvent(eventDoc._id);
				this._quizService.loadEvent(eventDoc._id);
			}
		});
	}

	submitQuestion(): void {
		this._withVisitorName(() => {
			const text = this.newQuestionText().trim();
			const eventDoc = this.event();
			if (!text || !eventDoc) {
				return;
			}

			const authorName = this.deviceIdService.visitorName() || 'Anonymous';
			if (this.isDemoEvent()) {
				this._demoQuestionStore.ask(text, authorName);
			} else {
				this._questionService.ask(eventDoc._id, text, authorName);
			}
			this.newQuestionText.set('');
		});
	}

	likeQuestion(question: ReturnType<typeof this.questions>[number]): void {
		this._withVisitorName(() => {
			if (this.isDemoEvent()) {
				this._demoQuestionStore.like(question, this.deviceIdService.deviceId);
			} else {
				this._questionService.like(question);
			}
		});
	}

	goToPolls(): void {
		const ids = this.activePolls()
			.filter((poll) => !this.hasAnsweredPoll(poll._id))
			.map((poll) => poll._id);
		if (!ids.length) {
			return;
		}

		this.pollFlowIds.set(ids);
		this.pollFlowIndex.set(0);
		this.selectedPollOption.set(null);
	}

	submitPollAnswer(): void {
		this._withVisitorName(() => {
			const pollDoc = this.currentPoll();
			const optionIndex = this.selectedPollOption();
			if (!pollDoc || optionIndex === null) {
				return;
			}

			if (this.isDemoEvent()) {
				this._demoAnswerStore.answerPoll(pollDoc._id, optionIndex);
			} else {
				this._pollAnswerService.answer(pollDoc, optionIndex);
			}
			this.selectedPollOption.set(null);
			this.pollFlowIndex.update((index) => index + 1);
		});
	}

	goToQuizzes(): void {
		const ids = this.activeQuizzes()
			.filter((quiz) => !this.hasAnsweredQuiz(quiz._id))
			.map((quiz) => quiz._id);
		if (!ids.length) {
			return;
		}

		this.quizFlowIds.set(ids);
		this.quizFlowIndex.set(0);
		this.selectedQuizOption.set(null);
		this.quizRevealed.set(false);
	}

	submitQuizAnswer(): void {
		this._withVisitorName(() => {
			const quizDoc = this.currentQuiz();
			const optionIndex = this.selectedQuizOption();
			if (!quizDoc || optionIndex === null) {
				return;
			}

			if (this.isDemoEvent()) {
				this._demoAnswerStore.answerQuiz(quizDoc._id, optionIndex);
			} else {
				this._quizAnswerService.answer(quizDoc, optionIndex);
			}
			if (quizDoc.revealAnswer) {
				this.quizRevealed.set(true);
			} else {
				this._advanceQuiz();
			}
		});
	}

	nextQuiz(): void {
		this.quizRevealed.set(false);
		this._advanceQuiz();
	}

	private _advanceQuiz(): void {
		this.selectedQuizOption.set(null);
		this.quizFlowIndex.update((index) => index + 1);
	}

	hasAnsweredPoll(pollId: string): boolean {
		if (this.isDemoEvent()) {
			return this._demoAnswerStore.hasAnsweredPoll(pollId);
		}
		return this._pollAnswerService
			.all()
			.some((entry) => entry.pollId === pollId && entry.deviceId === this.deviceIdService.deviceId);
	}

	hasAnsweredQuiz(quizId: string): boolean {
		if (this.isDemoEvent()) {
			return this._demoAnswerStore.hasAnsweredQuiz(quizId);
		}
		return this._quizAnswerService
			.all()
			.some((entry) => entry.quizId === quizId && entry.deviceId === this.deviceIdService.deviceId);
	}

	confirmName(): void {
		this.deviceIdService.setVisitorName(this.nameDraft().trim());
		this.showNamePrompt.set(false);

		const pending = this._pendingInteraction;
		this._pendingInteraction = null;
		pending?.();
	}

	/** Prompts for a visitor display name once, on first interaction, then runs the action. */
	private _withVisitorName(action: () => void): void {
		if (this.deviceIdService.visitorName()) {
			action();
			return;
		}

		this._pendingInteraction = action;
		this.showNamePrompt.set(true);
	}
}
