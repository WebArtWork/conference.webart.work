import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ChapterService, ChapterReactionService } from '../../../conference/chapter/chapter.service';
import { DeviceIdService } from '../../../conference/device-id.service';
import { EventService } from '../../../conference/event/event.service';
import { PollService, PollAnswerService } from '../../../conference/poll/poll.service';
import { QuestionService } from '../../../conference/question/question.service';
import { QuizService, QuizAnswerService } from '../../../conference/quiz/quiz.service';

/**
 * Public event page: `event/:slug`. One link, one page — visitors read
 * chapters, react to the active one, ask/like questions, and answer active
 * polls/quizzes. No account required. Never reads owner-only analytics
 * (chapter reaction summaries, poll/quiz results) — that data has no code
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
	private readonly _eventService = inject(EventService);
	private readonly _chapterService = inject(ChapterService);
	private readonly _chapterReactionService = inject(ChapterReactionService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	private readonly _quizAnswerService = inject(QuizAnswerService);
	private readonly _metaService = inject(MetaService);
	readonly deviceIdService = inject(DeviceIdService);

	readonly slug = input.required<string>();

	readonly event = computed(() => this._eventService.bySlug(this.slug()) ?? null);
	readonly isLive = computed(() => this.event()?.state === 'live');

	readonly chapters = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._chapterService.byEvent(eventDoc._id) : [];
	});
	readonly activeChapter = computed(
		() => this.chapters().find((chapter) => chapter.isActive) ?? null,
	);
	readonly previousChapters = computed(() =>
		this.chapters().filter((chapter) => !chapter.isActive),
	);

	readonly questions = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._questionService.byEvent(eventDoc._id) : [];
	});
	readonly polls = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._pollService.byEvent(eventDoc._id) : [];
	});
	readonly quizzes = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._quizService.byEvent(eventDoc._id) : [];
	});
	readonly activePolls = computed(() => this.polls().filter((poll) => poll.active));
	readonly activeQuizzes = computed(() => this.quizzes().filter((quiz) => quiz.active));

	readonly newQuestionText = signal('');
	readonly reactedChapterIds = signal<Set<string>>(this._readIdSet('conference-reacted-chapters'));

	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	constructor() {
		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
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
	}

	submitQuestion(): void {
		this._withVisitorName(() => {
			const text = this.newQuestionText().trim();
			const eventDoc = this.event();
			if (!text || !eventDoc) {
				return;
			}

			this._questionService.ask(eventDoc._id, text, this.deviceIdService.visitorName() || 'Anonymous');
			this.newQuestionText.set('');
		});
	}

	likeQuestion(question: ReturnType<typeof this.questions>[number]): void {
		this._withVisitorName(() => this._questionService.like(question));
	}

	reactToChapter(value: number): void {
		this._withVisitorName(() => {
			const chapter = this.activeChapter();
			if (!chapter) {
				return;
			}

			this._chapterReactionService.react(chapter._id, value);
			const next = new Set(this.reactedChapterIds());
			next.add(chapter._id);
			this.reactedChapterIds.set(next);
			this._persistIdSet('conference-reacted-chapters', next);
		});
	}

	answerPoll(poll: ReturnType<typeof this.polls>[number], optionIndex: number): void {
		this._withVisitorName(() => this._pollAnswerService.answer(poll, optionIndex));
	}

	answerQuiz(quiz: ReturnType<typeof this.quizzes>[number], optionIndex: number): void {
		this._withVisitorName(() => this._quizAnswerService.answer(quiz, optionIndex));
	}

	hasAnsweredPoll(pollId: string): boolean {
		return this._pollAnswerService
			.all()
			.some((entry) => entry.pollId === pollId && entry.deviceId === this.deviceIdService.deviceId);
	}

	hasAnsweredQuiz(quizId: string): boolean {
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

	private _readIdSet(key: string): Set<string> {
		if (typeof localStorage === 'undefined') {
			return new Set();
		}

		try {
			const raw = localStorage.getItem(key);
			return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
		} catch {
			return new Set();
		}
	}

	private _persistIdSet(key: string, set: Set<string>): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(key, JSON.stringify([...set]));
		}
	}
}
