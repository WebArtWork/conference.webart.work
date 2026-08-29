import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { environment } from '@env';
import { MessageService } from '@wawjs/ngx-prime/api';
import { Chapter } from '../../../conference/chapter/chapter.interface';
import { ChapterService, ChapterReactionService } from '../../../conference/chapter/chapter.service';
import { NEW_CHAPTER } from '../../../conference/chapter/chapter.const';
import { EventState } from '../../../conference/event/event.interface';
import { EventService } from '../../../conference/event/event.service';
import { Poll } from '../../../conference/poll/poll.interface';
import { PollService, PollAnswerService } from '../../../conference/poll/poll.service';
import { NEW_POLL } from '../../../conference/poll/poll.const';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { Quiz } from '../../../conference/quiz/quiz.interface';
import { QuizService, QuizAnswerService } from '../../../conference/quiz/quiz.service';
import { NEW_QUIZ } from '../../../conference/quiz/quiz.const';

/**
 * Owner dashboard: `event/:slug/manage`. Full control over the event plus
 * every piece of audience analytics that visitors never see (chapter
 * reaction summaries, poll/quiz results). All data lives in the static
 * local stores under `src/app/conference/` — reads happen inline via
 * signals/computed, so this page updates live within the tab without any
 * network or socket round-trip.
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
	private readonly _router = inject(Router);
	private readonly _messageService = inject(MessageService);
	private readonly _userService = inject(UserService);
	private readonly _eventService = inject(EventService);
	private readonly _chapterService = inject(ChapterService);
	private readonly _chapterReactionService = inject(ChapterReactionService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	private readonly _quizAnswerService = inject(QuizAnswerService);

	readonly slug = input.required<string>();

	readonly event = computed(() => this._eventService.bySlug(this.slug()) ?? null);

	/** Restricts this page to the event's actual owner, not just any logged-in user. */
	readonly isOwner = computed(() => {
		const eventDoc = this.event();
		const currentUserId = this._userService.user()?._id;
		return !!eventDoc && !!currentUserId && eventDoc.owner === currentUserId;
	});

	readonly joinUrl = computed(() => `${environment.url}/event/${this.slug()}`);

	readonly chapters = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._chapterService.byEvent(eventDoc._id) : [];
	});
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

	/** Live audience-participation counters for the dashboard summary. */
	readonly stats = computed(() => {
		const chapterIds = new Set(this.chapters().map((chapter) => chapter._id));
		const reactionCount = this._chapterReactionService
			.all()
			.filter((reaction) => chapterIds.has(reaction.chapterId)).length;

		return {
			questionCount: this.questions().length,
			totalLikes: this.questions().reduce((sum, question) => sum + question.likes, 0),
			reactionCount,
			pollAnswerCount: this.polls().reduce(
				(sum, poll) => sum + this._pollAnswerService.all().filter((a) => a.pollId === poll._id).length,
				0,
			),
			quizAnswerCount: this.quizzes().reduce(
				(sum, quiz) => sum + this._quizAnswerService.all().filter((a) => a.quizId === quiz._id).length,
				0,
			),
		};
	});

	readonly stateOptions: { label: string; value: EventState }[] = [
		{ label: 'draft', value: 'draft' },
		{ label: 'live', value: 'live' },
		{ label: 'ended', value: 'ended' },
	];

	readonly eventTitleDraft = signal('');
	readonly eventDescriptionDraft = signal('');

	readonly newChapterTitle = signal('');
	readonly newPollQuestion = signal('');
	readonly newPollOptions = signal('');
	readonly newQuizQuestion = signal('');
	readonly newQuizOptions = signal('');
	readonly newQuizCorrectIndex = signal(0);

	constructor() {
		const eventDoc = this.event();
		this.eventTitleDraft.set(eventDoc?.title ?? '');
		this.eventDescriptionDraft.set(eventDoc?.description ?? '');

		queueMicrotask(() => {
			if (eventDoc && !this.isOwner()) {
				this._router.navigateByUrl('/dashboard');
			}
		});
	}

	copyJoinLink(): void {
		navigator.clipboard?.writeText(this.joinUrl()).then(() => {
			this._messageService.add({ severity: 'success', detail: 'Join link copied' });
		});
	}

	saveEventInfo(): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		this._eventService.update(eventDoc._id, {
			title: this.eventTitleDraft().trim(),
			description: this.eventDescriptionDraft().trim(),
		});
	}

	setEventState(state: EventState): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		this._eventService.update(eventDoc._id, { state });
	}

	createChapter(): void {
		const title = this.newChapterTitle().trim();
		const eventDoc = this.event();
		if (!title || !eventDoc) {
			return;
		}

		this._chapterService.create({
			...NEW_CHAPTER,
			eventId: eventDoc._id,
			title,
			order: this.chapters().length,
		});
		this.newChapterTitle.set('');
	}

	activateChapter(chapter: Chapter): void {
		this._chapterService.activate(chapter);
	}

	moveChapter(chapter: Chapter, direction: -1 | 1): void {
		const ordered = this.chapters();
		const index = ordered.findIndex((item) => item._id === chapter._id);
		const swapWith = ordered[index + direction];
		if (index < 0 || !swapWith) {
			return;
		}

		this._chapterService.update(chapter._id, { order: swapWith.order });
		this._chapterService.update(swapWith._id, { order: chapter.order });
	}

	deleteChapter(chapter: Chapter): void {
		this._chapterService.remove(chapter._id);
	}

	chapterReactionSummary(chapter: Chapter) {
		return this._chapterReactionService.summary(chapter._id);
	}

	deleteQuestion(question: Question): void {
		this._questionService.removeQuestion(question);
	}

	createPoll(): void {
		const question = this.newPollQuestion().trim();
		const options = this._splitOptions(this.newPollOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._pollService.create({ ...NEW_POLL, eventId: eventDoc._id, question, options });
		this.newPollQuestion.set('');
		this.newPollOptions.set('');
	}

	togglePoll(poll: Poll): void {
		this._pollService.update(poll._id, { active: !poll.active });
	}

	pollResults(poll: Poll) {
		return this._pollAnswerService.results(poll);
	}

	createQuiz(): void {
		const question = this.newQuizQuestion().trim();
		const options = this._splitOptions(this.newQuizOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._quizService.create({
			...NEW_QUIZ,
			eventId: eventDoc._id,
			question,
			options,
			correctOptionIndex: this.newQuizCorrectIndex(),
		});
		this.newQuizQuestion.set('');
		this.newQuizOptions.set('');
		this.newQuizCorrectIndex.set(0);
	}

	toggleQuiz(quiz: Quiz): void {
		this._quizService.update(quiz._id, { active: !quiz.active });
	}

	quizResults(quiz: Quiz) {
		return this._quizAnswerService.results(quiz);
	}

	private _splitOptions(raw: string): string[] {
		return raw
			.split(',')
			.map((option) => option.trim())
			.filter((option) => option.length > 0);
	}
}
