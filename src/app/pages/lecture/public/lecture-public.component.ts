import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ConferenceService } from '../../../conference/conference.service';
import { DeviceIdService } from '../../../conference/device-id.service';
import { EventService } from '../../../conference/event/event.service';
import { LectureService } from '../../../conference/lecture/lecture.service';
import { PollAnswerService, PollService } from '../../../conference/poll/poll.service';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { QuizAnswerService, QuizService } from '../../../conference/quiz/quiz.service';
import { slugify } from '../../../shared/slugify';

/**
 * Public lecture page: `lect#:lectureId`. Mirrors the conference programme's
 * `conf#:conferenceId` pattern — the id lives in the URL fragment (not a
 * path param), so it's read from `ActivatedRoute.fragment` rather than an
 * `input()`. Reached from the conference programme — one lecture per page
 * instead of an inline accordion, so the URL is shareable on its own.
 */
@Component({
	selector: 'app-lecture-public',
	imports: [
		ButtonModule,
		CardModule,
		DialogModule,
		InputTextModule,
		RadioButtonModule,
		TagModule,
		FormsModule,
		RouterLink,
		TranslateDirective,
	],
	templateUrl: './lecture-public.component.html',
	styleUrl: './lecture-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LecturePublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _lectureService = inject(LectureService);
	private readonly _eventService = inject(EventService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	readonly pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	readonly quizAnswerService = inject(QuizAnswerService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	private readonly _location = inject(Location);
	private readonly _userService = inject(UserService);
	readonly deviceIdService = inject(DeviceIdService);

	readonly lectureId = toSignal(this._route.fragment, { initialValue: null });

	readonly lecture = computed(() => this._lectureService.byPublicId(this.lectureId() ?? '') ?? null);
	readonly conference = computed(() => {
		const conferenceId = this.lecture()?.conferenceId;
		return conferenceId ? (this._conferenceService.byId(conferenceId) ?? null) : null;
	});

	readonly schedule = computed(() => {
		const lecture = this.lecture();
		if (!lecture) {
			return { speaker: '', time: '' };
		}

		const event = this._eventService.all().find((item) => item.lectureId === lecture._id);
		if (!event || (!event.date && !event.startTime)) {
			return { speaker: '', time: '' };
		}

		const time = `${event.date} ${event.startTime}${event.endTime ? ' – ' + event.endTime : ''}`.trim();
		return { speaker: event.speaker, time };
	});

	readonly questions = computed(() => {
		const lecture = this.lecture();
		return lecture ? this._questionService.byEvent(lecture._id) : [];
	});

	/** The event this lecture is scheduled as, if any — polls are keyed by event id, not lecture id. */
	readonly event = computed(() => {
		const lecture = this.lecture();
		return lecture ? (this._eventService.all().find((item) => item.lectureId === lecture._id) ?? null) : null;
	});
	readonly activePolls = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._pollService.byEvent(eventDoc._id).filter((poll) => poll.active) : [];
	});
	readonly allPollsAnswered = computed(() => this.activePolls().every((poll) => this.pollAnswerService.hasAnswered(poll)));
	readonly activeQuizzes = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._quizService.byEvent(eventDoc._id).filter((quiz) => quiz.active) : [];
	});
	readonly allQuizzesAnswered = computed(() => this.activeQuizzes().every((quiz) => this.quizAnswerService.hasAnswered(quiz)));

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
		return id ? (this._pollService.byId(id) ?? null) : null;
	});
	readonly pollFlowPosition = computed(() => this.pollFlowIndex() + 1);
	readonly pollFlowTotal = computed(() => this.pollFlowIds()?.length ?? 0);
	readonly pollFlowFinished = computed(() => {
		const ids = this.pollFlowIds();
		return ids !== null && this.pollFlowIndex() >= ids.length;
	});

	/** Same idea as the poll flow above, for quizzes (plus the reveal-answer pause). */
	readonly quizFlowIds = signal<string[] | null>(null);
	readonly quizFlowIndex = signal(0);
	readonly selectedQuizOption = signal<number | null>(null);
	readonly quizRevealed = signal(false);
	readonly currentQuiz = computed(() => {
		const ids = this.quizFlowIds();
		const id = ids ? ids[this.quizFlowIndex()] : undefined;
		return id ? (this._quizService.byId(id) ?? null) : null;
	});
	readonly quizFlowPosition = computed(() => this.quizFlowIndex() + 1);
	readonly quizFlowTotal = computed(() => this.quizFlowIds()?.length ?? 0);
	readonly quizFlowFinished = computed(() => {
		const ids = this.quizFlowIds();
		return ids !== null && this.quizFlowIndex() >= ids.length;
	});

	constructor() {
		effect(() => {
			const lecture = this.lecture();
			if (!lecture) {
				return;
			}

			this._metaService.applyMeta({ title: lecture.title, description: lecture.description || undefined });
			this._questionService.loadEvent(lecture._id);
		});

		effect(() => {
			const lecture = this.lecture();
			const conference = this.conference();
			if (!lecture || !conference) {
				return;
			}

			// Old links (raw lecture id) still resolve, but the address bar is
			// normalized to the readable conf-<slug>-<n> form once it's found.
			const siblings = this._lectureService.all().filter((item) => item.conferenceId === conference._id);
			const position = siblings.indexOf(lecture) + 1;
			if (position < 1) {
				return;
			}

			const canonical = `conf-${slugify(conference.title)}-${position}`;
			if (this.lectureId() !== canonical) {
				this._location.replaceState(`/lect#${canonical}`);
			}
		});

		effect(() => {
			const eventDoc = this.event();
			if (!eventDoc) {
				return;
			}

			this._pollService.loadEvent(eventDoc._id);
			this._quizService.loadEvent(eventDoc._id);
		});

		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});

		// Polls/quizzes open expanded by default — no "Take poll"/"Take quiz"
		// click needed — as soon as there's something unanswered to show. Not
		// gated to "once per page load": if an organizer activates another
		// poll/quiz later in the same visit, it opens the same way.
		effect(() => {
			if (this.pollFlowIds() !== null) {
				return;
			}
			if (this.activePolls().some((poll) => !this.pollAnswerService.hasAnswered(poll))) {
				this.goToPolls();
			}
		});

		effect(() => {
			if (this.quizFlowIds() !== null) {
				return;
			}
			if (this.activeQuizzes().some((quiz) => !this.quizAnswerService.hasAnswered(quiz))) {
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
	}

	submitQuestion(): void {
		this._withVisitorName(() => {
			const text = this.newQuestionText().trim();
			const lecture = this.lecture();
			if (!text || !lecture) {
				return;
			}

			this._questionService.ask(lecture._id, text, this._effectiveVisitorName() || 'Anonymous');
			this.newQuestionText.set('');
		});
	}

	likeQuestion(question: Question): void {
		this._withVisitorName(() => this._questionService.like(question));
	}

	goToPolls(): void {
		const ids = this.activePolls()
			.filter((poll) => !this.pollAnswerService.hasAnswered(poll))
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

			this.pollAnswerService.answer(pollDoc, optionIndex);
			this.selectedPollOption.set(null);
			this.pollFlowIndex.update((index) => index + 1);
		});
	}

	goToQuizzes(): void {
		const ids = this.activeQuizzes()
			.filter((quiz) => !this.quizAnswerService.hasAnswered(quiz))
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

			this.quizAnswerService.answer(quizDoc, optionIndex);
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

	confirmName(): void {
		this.deviceIdService.setVisitorName(this.nameDraft().trim());
		this.showNamePrompt.set(false);

		const pending = this._pendingInteraction;
		this._pendingInteraction = null;
		pending?.();
	}

	/** Logged-in visitors already have a display name on their profile — no need to ask again. */
	private _effectiveVisitorName(): string {
		return this.deviceIdService.visitorName() || this._userService.user()?.name || '';
	}

	/** Prompts for a visitor display name once, on first interaction, then runs the action. */
	private _withVisitorName(action: () => void): void {
		if (this._effectiveVisitorName()) {
			action();
			return;
		}

		this._pendingInteraction = action;
		this.showNamePrompt.set(true);
	}
}
