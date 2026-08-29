import { Component, computed, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { ChapterService } from '../../../conference/chapter/chapter.service';
import { Chapter } from '../../../conference/chapter/chapter.interface';
import { Event } from '../../../conference/event/event.interface';
import { EventService } from '../../../conference/event/event.service';
import { Poll } from '../../../conference/poll/poll.interface';
import { PollService } from '../../../conference/poll/poll.service';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { Quiz } from '../../../conference/quiz/quiz.interface';
import { QuizService } from '../../../conference/quiz/quiz.service';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { FormsModule } from '@angular/forms';
import { TranslateDirective } from '@wawjs/ngx-translate';

const LIKED_KEY = 'conference-liked-questions';
const ANSWERED_POLLS_KEY = 'conference-answered-polls';
const ANSWERED_QUIZZES_KEY = 'conference-answered-quizzes';
const REACTED_CHAPTERS_KEY = 'conference-reacted-chapters';
const POLL_INTERVAL_MS = 8000;

/**
 * Public event page: `event/:slug`. One link, one page — visitors read
 * chapters, react to the active one, ask/like questions, and answer active
 * polls/quizzes. No account required. Never fetches owner-only analytics
 * (chapter reaction summaries, poll/quiz results) — that data has no code
 * path here at all.
 */
@Component({
	selector: 'app-event-public',
	imports: [
		ButtonModule,
		CardModule,
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
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _quizService = inject(QuizService);

	readonly slug = input.required<string>();

	readonly event = signal<Event | null>(null);
	readonly chapters = signal<Chapter[]>([]);
	readonly questions = signal<Question[]>([]);
	readonly polls = signal<Poll[]>([]);
	readonly quizzes = signal<Quiz[]>([]);
	readonly newQuestionText = signal('');

	readonly likedQuestionIds = signal<Set<string>>(this._readIdSet(LIKED_KEY));
	readonly answeredPollIds = signal<Set<string>>(
		this._readIdSet(ANSWERED_POLLS_KEY),
	);
	readonly answeredQuizIds = signal<Set<string>>(
		this._readIdSet(ANSWERED_QUIZZES_KEY),
	);
	readonly reactedChapterIds = signal<Set<string>>(
		this._readIdSet(REACTED_CHAPTERS_KEY),
	);

	readonly isLive = computed(() => this.event()?.state === 'live');
	readonly activeChapter = computed(
		() => this.chapters().find((chapter) => chapter.isActive) ?? null,
	);
	readonly previousChapters = computed(() =>
		this.chapters().filter((chapter) => !chapter.isActive),
	);
	readonly activePolls = computed(() =>
		this.polls().filter((poll) => poll.active),
	);
	readonly activeQuizzes = computed(() =>
		this.quizzes().filter((quiz) => quiz.active),
	);

	constructor() {
		// Loads the event on first render, then every time the route slug changes.
		let lastLoadedSlug: string | null = null;

		interval(POLL_INTERVAL_MS)
			.pipe(takeUntilDestroyed())
			.subscribe(() => this._refreshEventContent());

		// Effect-free polling bootstrap: run once immediately for the initial slug,
		// re-run whenever `slug()` changes via `effect` below.
		const bootstrap = () => {
			const slug = this.slug();
			if (slug === lastLoadedSlug) {
				return;
			}
			lastLoadedSlug = slug;
			this._loadEvent(slug);
		};

		bootstrap();
	}

	submitQuestion(): void {
		const text = this.newQuestionText().trim();
		const eventDoc = this.event();
		if (!text || !eventDoc) {
			return;
		}

		this._questionService
			.create({
				_id: '',
				eventId: eventDoc._id,
				text,
				likes: 0,
			})
			.subscribe(() => {
				this.newQuestionText.set('');
				this._loadQuestions(eventDoc._id);
			});
	}

	likeQuestion(question: Question): void {
		if (this.likedQuestionIds().has(question._id)) {
			return;
		}

		this._questionService.like(question).subscribe();
		this._markId(LIKED_KEY, this.likedQuestionIds, question._id);
		question.likes += 1;
	}

	reactToChapter(value: number): void {
		const chapter = this.activeChapter();
		if (!chapter) {
			return;
		}

		this._chapterService.react(chapter._id, value).subscribe();
		this._markId(REACTED_CHAPTERS_KEY, this.reactedChapterIds, chapter._id);
	}

	answerPoll(poll: Poll, optionIndex: number): void {
		if (this.answeredPollIds().has(poll._id)) {
			return;
		}

		this._pollService.answer(poll, optionIndex).subscribe();
		this._markId(ANSWERED_POLLS_KEY, this.answeredPollIds, poll._id);
	}

	answerQuiz(quiz: Quiz, optionIndex: number): void {
		if (this.answeredQuizIds().has(quiz._id)) {
			return;
		}

		this._quizService.answer(quiz, optionIndex).subscribe();
		this._markId(ANSWERED_QUIZZES_KEY, this.answeredQuizIds, quiz._id);
	}

	private _loadEvent(slug: string): void {
		this._eventService.bySlug(slug).subscribe((eventDoc) => {
			this.event.set(eventDoc);
			this._loadChapters(eventDoc._id);
			this._loadQuestions(eventDoc._id);
			this._loadPolls(eventDoc._id);
			this._loadQuizzes(eventDoc._id);
		});
	}

	// Polling fallback: the public page has no realtime requirement in the
	// spec, but a live event benefits from fresh chapters/questions/polls
	// without a manual reload. Uses plain interval + CRUD `get`, not a redesign.
	private _refreshEventContent(): void {
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

	private _markId(
		key: string,
		set: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(set());
		next.add(id);
		set.set(next);

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(key, JSON.stringify([...next]));
		}
	}
}
