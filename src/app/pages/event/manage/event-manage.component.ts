import { DecimalPipe } from '@angular/common';
import { Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { SocketService } from '@wawjs/ngx-socket';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Chapter } from '../../../conference/chapter/chapter.interface';
import { ChapterService } from '../../../conference/chapter/chapter.service';
import { NEW_CHAPTER } from '../../../conference/chapter/chapter.const';
import { ChapterReactionSummary } from '../../../conference/chapter/chapter.interface';
import { Event, EventState } from '../../../conference/event/event.interface';
import { EventService } from '../../../conference/event/event.service';
import { Poll, PollResult } from '../../../conference/poll/poll.interface';
import { PollService } from '../../../conference/poll/poll.service';
import { NEW_POLL } from '../../../conference/poll/poll.const';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { Quiz, QuizResult } from '../../../conference/quiz/quiz.interface';
import { QuizService } from '../../../conference/quiz/quiz.service';
import { NEW_QUIZ } from '../../../conference/quiz/quiz.const';

const REFRESH_INTERVAL_MS = 5000;

/**
 * Owner dashboard: `event/:slug/manage`. Full control over the event plus
 * every piece of audience analytics that visitors never see (chapter
 * reaction summaries, poll/quiz results).
 *
 * Live-update note: `@wawjs/ngx-socket`'s `SocketService` is a thin transport
 * wrapper (`on`/`emit`/`setUrl`/`disconnect`) with no pre-defined event
 * catalogue and, notably, no `off()` — a registered listener cannot be
 * unsubscribed. Real-time refresh is therefore attempted best-effort over
 * `SocketService.on('event:<eventId>')` (assumption — confirm the actual
 * server event name once a backend exists), with a `_destroyed` guard so the
 * callback becomes a no-op after this component is destroyed since the
 * listener itself can't be torn down. Interval polling is the *guaranteed*
 * refresh path — kept short and torn down deterministically via
 * `takeUntilDestroyed()` — so live updates work even if the socket event
 * never fires.
 */
@Component({
	selector: 'app-event-manage',
	imports: [
		ButtonModule,
		CardModule,
		DecimalPipe,
		InputTextModule,
		SelectButtonModule,
		TagModule,
		TextareaModule,
		FormsModule,
		TranslateDirective,
	],
	templateUrl: './event-manage.component.html',
	styleUrl: './event-manage.component.scss',
})
export class EventManageComponent {
	private readonly _eventService = inject(EventService);
	private readonly _chapterService = inject(ChapterService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _quizService = inject(QuizService);
	private readonly _socketService = inject(SocketService);

	readonly slug = input.required<string>();

	readonly event = signal<Event | null>(null);
	readonly chapters = signal<Chapter[]>([]);
	readonly questions = signal<Question[]>([]);
	readonly polls = signal<Poll[]>([]);
	readonly quizzes = signal<Quiz[]>([]);

	readonly reactionSummaries = signal<Record<string, ChapterReactionSummary>>(
		{},
	);
	readonly pollResults = signal<Record<string, PollResult[]>>({});
	readonly quizResults = signal<Record<string, QuizResult[]>>({});

	readonly eventTitleDraft = signal('');
	readonly eventDescriptionDraft = signal('');

	readonly newChapterTitle = signal('');
	readonly newPollQuestion = signal('');
	readonly newPollOptions = signal('');
	readonly newQuizQuestion = signal('');
	readonly newQuizOptions = signal('');
	readonly newQuizCorrectIndex = signal(0);

	readonly stateOptions: { label: string; value: EventState }[] = [
		{ label: 'draft', value: 'draft' },
		{ label: 'live', value: 'live' },
		{ label: 'ended', value: 'ended' },
	];

	readonly sortedChapters = computed(() =>
		[...this.chapters()].sort((a, b) => a.order - b.order),
	);
	readonly sortedQuestions = computed(() =>
		[...this.questions()].sort((a, b) => b.likes - a.likes),
	);

	private _lastLoadedSlug: string | null = null;
	private _destroyed = false;

	constructor() {
		inject(DestroyRef).onDestroy(() => {
			this._destroyed = true;
		});

		interval(REFRESH_INTERVAL_MS)
			.pipe(takeUntilDestroyed())
			.subscribe(() => this._refreshAll());

		const slug = this.slug();
		this._lastLoadedSlug = slug;
		this._loadEvent(slug);
	}

	saveEventInfo(): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		const updated: Event = {
			...eventDoc,
			title: this.eventTitleDraft().trim(),
			description: this.eventDescriptionDraft().trim(),
		};

		this._eventService.update(updated).subscribe(() => this.event.set(updated));
	}

	setEventState(state: EventState): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		const updated = { ...eventDoc, state };
		this.event.set(updated);
		this._eventService.update(updated).subscribe();
	}

	createChapter(): void {
		const title = this.newChapterTitle().trim();
		const eventDoc = this.event();
		if (!title || !eventDoc) {
			return;
		}

		this._chapterService
			.create({
				...NEW_CHAPTER,
				eventId: eventDoc._id,
				title,
				order: this.chapters().length,
			})
			.subscribe(() => {
				this.newChapterTitle.set('');
				this._loadChapters(eventDoc._id);
			});
	}

	activateChapter(chapter: Chapter): void {
		this._chapterService.activate(chapter).subscribe(() => {
			const eventDoc = this.event();
			if (eventDoc) {
				this._loadChapters(eventDoc._id);
			}
		});
	}

	deleteChapter(chapter: Chapter): void {
		this._chapterService.delete(chapter).subscribe(() => {
			const eventDoc = this.event();
			if (eventDoc) {
				this._loadChapters(eventDoc._id);
			}
		});
	}

	loadChapterReactions(chapter: Chapter): void {
		this._chapterService.reactionSummary(chapter._id).subscribe((summary) => {
			this.reactionSummaries.update((current) => ({
				...current,
				[chapter._id]: summary,
			}));
		});
	}

	deleteQuestion(question: Question): void {
		this._questionService.remove(question).subscribe(() => {
			const eventDoc = this.event();
			if (eventDoc) {
				this._loadQuestions(eventDoc._id);
			}
		});
	}

	createPoll(): void {
		const question = this.newPollQuestion().trim();
		const options = this._splitOptions(this.newPollOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._pollService
			.create({ ...NEW_POLL, eventId: eventDoc._id, question, options })
			.subscribe(() => {
				this.newPollQuestion.set('');
				this.newPollOptions.set('');
				this._loadPolls(eventDoc._id);
			});
	}

	togglePoll(poll: Poll): void {
		this._pollService.update({ ...poll, active: !poll.active }).subscribe(() => {
			const eventDoc = this.event();
			if (eventDoc) {
				this._loadPolls(eventDoc._id);
			}
		});
	}

	loadPollResults(poll: Poll): void {
		this._pollService.results(poll).subscribe((results) => {
			this.pollResults.update((current) => ({ ...current, [poll._id]: results }));
		});
	}

	createQuiz(): void {
		const question = this.newQuizQuestion().trim();
		const options = this._splitOptions(this.newQuizOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._quizService
			.create({
				...NEW_QUIZ,
				eventId: eventDoc._id,
				question,
				options,
				correctOptionIndex: this.newQuizCorrectIndex(),
			})
			.subscribe(() => {
				this.newQuizQuestion.set('');
				this.newQuizOptions.set('');
				this.newQuizCorrectIndex.set(0);
				this._loadQuizzes(eventDoc._id);
			});
	}

	toggleQuiz(quiz: Quiz): void {
		this._quizService.update({ ...quiz, active: !quiz.active }).subscribe(() => {
			const eventDoc = this.event();
			if (eventDoc) {
				this._loadQuizzes(eventDoc._id);
			}
		});
	}

	loadQuizResults(quiz: Quiz): void {
		this._quizService.results(quiz).subscribe((results) => {
			this.quizResults.update((current) => ({ ...current, [quiz._id]: results }));
		});
	}

	private _loadEvent(slug: string): void {
		this._eventService.bySlug(slug).subscribe((eventDoc) => {
			this.event.set(eventDoc);
			this.eventTitleDraft.set(eventDoc.title);
			this.eventDescriptionDraft.set(eventDoc.description);
			this._loadChapters(eventDoc._id);
			this._loadQuestions(eventDoc._id);
			this._loadPolls(eventDoc._id);
			this._loadQuizzes(eventDoc._id);

			// Best-effort live refresh; falls back silently to interval polling
			// above if the server never emits this event. Guarded by `_destroyed`
			// since `SocketService` exposes no `off()` to unsubscribe this listener.
			this._socketService.on(`event:${eventDoc._id}`, () => {
				if (!this._destroyed) {
					this._refreshAll();
				}
			});
		});
	}

	private _refreshAll(): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		this._loadChapters(eventDoc._id);
		this._loadQuestions(eventDoc._id);
		this._loadPolls(eventDoc._id);
		this._loadQuizzes(eventDoc._id);
	}

	private _loadChapters(eventId: string): void {
		this._chapterService
			.byEvent(eventId)
			.subscribe((chapters) => this.chapters.set(chapters));
	}

	private _loadQuestions(eventId: string): void {
		this._questionService
			.byEvent(eventId)
			.subscribe((questions) => this.questions.set(questions));
	}

	private _loadPolls(eventId: string): void {
		this._pollService.byEvent(eventId).subscribe((polls) => this.polls.set(polls));
	}

	private _loadQuizzes(eventId: string): void {
		this._quizService
			.byEvent(eventId)
			.subscribe((quizzes) => this.quizzes.set(quizzes));
	}

	private _splitOptions(raw: string): string[] {
		return raw
			.split(',')
			.map((option) => option.trim())
			.filter((option) => option.length > 0);
	}
}
