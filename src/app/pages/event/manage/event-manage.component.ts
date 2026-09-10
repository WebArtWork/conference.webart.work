import { ChangeDetectorRef, Component, OnInit, WritableSignal, computed, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { CheckboxModule } from '@wawjs/ngx-prime/checkbox';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { MessageService } from '@wawjs/ngx-prime/api';
import { EventState } from '../../../conference/event/event.interface';
import { EventService } from '../../../conference/event/event.service';
import { NEW_LECTURE } from '../../../conference/lecture/lecture.const';
import { LectureService } from '../../../conference/lecture/lecture.service';
import { Poll } from '../../../conference/poll/poll.interface';
import { PollService, PollAnswerService } from '../../../conference/poll/poll.service';
import { NEW_POLL } from '../../../conference/poll/poll.const';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { Quiz } from '../../../conference/quiz/quiz.interface';
import { QuizService, QuizAnswerService } from '../../../conference/quiz/quiz.service';
import { NEW_QUIZ } from '../../../conference/quiz/quiz.const';
import { TimeScrollInputComponent } from '../../../shared/time-scroll-input/time-scroll-input.component';

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
		CheckboxModule,
		InputTextModule,
		RadioButtonModule,
		RouterLink,
		SelectModule,
		SelectButtonModule,
		TextareaModule,
		TimeScrollInputComponent,
		FormsModule,
		TranslateDirective,
	],
	templateUrl: './event-manage.component.html',
	styleUrl: './event-manage.component.scss',
})
export class EventManageComponent implements OnInit {
	readonly translateService = inject(TranslateService);
	private readonly _router = inject(Router);
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	private readonly _userService = inject(UserService);
	private readonly _eventService = inject(EventService);
	private readonly _lectureService = inject(LectureService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	private readonly _pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	private readonly _quizAnswerService = inject(QuizAnswerService);
	private readonly _changeDetectorRef = inject(ChangeDetectorRef);

	readonly slug = input.required<string>();

	/** `#questions` shows the audience Q&A dashboard instead of the event setup form. */
	readonly fragment = toSignal(this._route.fragment, { initialValue: this._route.snapshot.fragment });

	readonly event = computed(() => this._eventService.bySlug(this.slug()) ?? null);

	/** Restricts this page to the event's actual owner, not just any logged-in user. */
	readonly isOwner = computed(() => {
		const eventDoc = this.event();
		const currentUserId = this._userService.user()?._id;
		return !!eventDoc && !!currentUserId && eventDoc.owner === currentUserId;
	});

	readonly lectures = this._lectureService.items;

	/** Questions live on the scheduled lecture's chat, not the event itself. */
	readonly questions = computed(() => {
		const eventDoc = this.event();
		if (!eventDoc) {
			return [];
		}
		return this._questionService.byEvent(eventDoc.lectureId || eventDoc._id);
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
		return {
			questionCount: this.questions().length,
			totalLikes: this.questions().reduce((sum, question) => sum + question.likes, 0),
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
	readonly eventSpeakerDraft = signal('');
	readonly eventDescriptionDraft = signal('');
	readonly eventDateDraft = signal('');
	readonly eventStartTimeDraft = signal('');
	readonly eventEndTimeDraft = signal('');
	readonly eventLectureIdDraft = signal('');
	readonly isAddingLecture = signal(false);
	readonly newLectureTitle = signal('');

	/** Date, start, and end are all required before an event can be saved or go live. */
	readonly scheduleValid = computed(
		() => !!this.eventDateDraft() && !!this.eventStartTimeDraft() && !!this.eventEndTimeDraft(),
	);

	readonly newPollQuestion = signal('');
	readonly newPollOptions = signal<string[]>(['', '']);

	readonly newQuizQuestion = signal('');
	readonly newQuizOptions = signal<string[]>(['', '']);
	readonly newQuizCorrectIndex = signal(0);
	readonly newQuizRevealAnswer = signal(false);

	readonly editingPollId = signal<string | null>(null);
	readonly editPollQuestion = signal('');
	readonly editPollOptions = signal<string[]>([]);

	readonly editingQuizId = signal<string | null>(null);
	readonly editQuizQuestion = signal('');
	readonly editQuizOptions = signal<string[]>([]);
	readonly editQuizCorrectIndex = signal(0);
	readonly editQuizRevealAnswer = signal(false);

	ngOnInit(): void {
		const eventDoc = this.event();
		this.eventTitleDraft.set(eventDoc?.title ?? '');
		this.eventSpeakerDraft.set(eventDoc?.speaker || this._userService.user()?.name || '');
		this.eventDescriptionDraft.set(eventDoc?.description ?? '');
		this.eventDateDraft.set(eventDoc?.date ?? '');
		this.eventStartTimeDraft.set(eventDoc?.startTime ?? '');
		this.eventEndTimeDraft.set(eventDoc?.endTime ?? '');
		this.eventLectureIdDraft.set(eventDoc?.lectureId ?? '');

		queueMicrotask(() => {
			if (eventDoc && !this.isOwner()) {
				this._router.navigateByUrl('/profile');
			}
		});
	}

	toggleAddLecture(): void {
		this.isAddingLecture.update((value) => !value);
	}

	createLecture(): void {
		const title = this.newLectureTitle().trim();
		if (!title) {
			return;
		}

		const lecture = this._lectureService.create({ ...NEW_LECTURE, title });
		this.eventLectureIdDraft.set(lecture._id);
		this.newLectureTitle.set('');
		this.isAddingLecture.set(false);
	}

	saveEventInfo(): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		if (!this.scheduleValid()) {
			this._messageService.add({
				severity: 'error',
				detail: this.translateService.translate('Date and time are required.')(),
			});
			return;
		}

		this._eventService.update(eventDoc._id, {
			title: this.eventTitleDraft().trim(),
			speaker: this.eventSpeakerDraft().trim(),
			description: this.eventDescriptionDraft().trim(),
			date: this.eventDateDraft(),
			startTime: this.eventStartTimeDraft(),
			endTime: this.eventEndTimeDraft(),
			lectureId: this.eventLectureIdDraft(),
		});
	}

	setEventState(state: EventState): void {
		const eventDoc = this.event();
		if (!eventDoc) {
			return;
		}

		this._eventService.update(eventDoc._id, { state });
	}

	/**
	 * Saves the current draft info and returns to lecture management. Only
	 * flips a still-`draft` event to `live` — an already `live`/`ended` state
	 * was set explicitly via the state switch above and must not be overridden.
	 */
	startSession(): void {
		if (!this.scheduleValid()) {
			this._messageService.add({
				severity: 'error',
				detail: this.translateService.translate('Date and time are required.')(),
			});
			return;
		}

		this.saveEventInfo();
		if (this.event()?.state === 'draft') {
			this.setEventState('live');
		}
		this._messageService.add({ severity: 'success', detail: this.translateService.translate('Saved')() });
		this._router.navigateByUrl('/lectures-manage');
	}

	deleteQuestion(question: Question): void {
		this._questionService.removeQuestion(question);
	}

	addNewPollOption(): void {
		this._addOption(this.newPollOptions);
	}

	removeNewPollOption(index: number): void {
		this._removeOption(this.newPollOptions, index);
	}

	updateNewPollOption(index: number, value: string): void {
		this._updateOption(this.newPollOptions, index, value);
	}

	createPoll(): void {
		const question = this.newPollQuestion().trim();
		const options = this._trimOptions(this.newPollOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._pollService.create({ ...NEW_POLL, eventId: eventDoc._id, question, options });
		this.newPollQuestion.set('');
		this.newPollOptions.set(['', '']);
	}

	readonly allPollsActive = computed(() => {
		const pollList = this.polls();
		return pollList.length > 0 && pollList.every((poll) => poll.active);
	});

	togglePollGroup(): void {
		const nextActive = !this.allPollsActive();
		for (const poll of this.polls()) {
			this._pollService.update(poll._id, { active: nextActive });
		}
		this._changeDetectorRef.markForCheck();
	}

	pollResults(poll: Poll) {
		return this._pollAnswerService.results(poll);
	}

	addEditPollOption(): void {
		this._addOption(this.editPollOptions);
	}

	removeEditPollOption(index: number): void {
		this._removeOption(this.editPollOptions, index);
	}

	updateEditPollOption(index: number, value: string): void {
		this._updateOption(this.editPollOptions, index, value);
	}

	startEditPoll(poll: Poll): void {
		this.editingPollId.set(poll._id);
		this.editPollQuestion.set(poll.question);
		this.editPollOptions.set([...poll.options]);
	}

	saveEditPoll(): void {
		const pollId = this.editingPollId();
		const question = this.editPollQuestion().trim();
		const options = this._trimOptions(this.editPollOptions());
		if (!pollId || !question || options.length < 2) {
			return;
		}

		this._pollService.update(pollId, { question, options });
		this.cancelEditPoll();
	}

	cancelEditPoll(): void {
		this.editingPollId.set(null);
		this.editPollQuestion.set('');
		this.editPollOptions.set([]);
	}

	deletePoll(poll: Poll): void {
		this._pollService.remove(poll._id);
		if (this.editingPollId() === poll._id) {
			this.cancelEditPoll();
		}
	}

	addNewQuizOption(): void {
		this._addOption(this.newQuizOptions);
	}

	removeNewQuizOption(index: number): void {
		this._removeOption(this.newQuizOptions, index);
	}

	updateNewQuizOption(index: number, value: string): void {
		this._updateOption(this.newQuizOptions, index, value);
	}

	createQuiz(): void {
		const question = this.newQuizQuestion().trim();
		const options = this._trimOptions(this.newQuizOptions());
		const eventDoc = this.event();
		if (!question || options.length < 2 || !eventDoc) {
			return;
		}

		this._quizService.create({
			...NEW_QUIZ,
			eventId: eventDoc._id,
			question,
			options,
			correctOptionIndex: Math.min(this.newQuizCorrectIndex(), options.length - 1),
			revealAnswer: this.newQuizRevealAnswer(),
		});
		this.newQuizQuestion.set('');
		this.newQuizOptions.set(['', '']);
		this.newQuizCorrectIndex.set(0);
		this.newQuizRevealAnswer.set(false);
	}

	readonly allQuizzesActive = computed(() => {
		const quizList = this.quizzes();
		return quizList.length > 0 && quizList.every((quiz) => quiz.active);
	});

	toggleQuizGroup(): void {
		const nextActive = !this.allQuizzesActive();
		for (const quiz of this.quizzes()) {
			this._quizService.update(quiz._id, { active: nextActive });
		}
		this._changeDetectorRef.markForCheck();
	}

	quizResults(quiz: Quiz) {
		return this._quizAnswerService.results(quiz);
	}

	addEditQuizOption(): void {
		this._addOption(this.editQuizOptions);
	}

	removeEditQuizOption(index: number): void {
		this._removeOption(this.editQuizOptions, index);
	}

	updateEditQuizOption(index: number, value: string): void {
		this._updateOption(this.editQuizOptions, index, value);
	}

	startEditQuiz(quiz: Quiz): void {
		this.editingQuizId.set(quiz._id);
		this.editQuizQuestion.set(quiz.question);
		this.editQuizOptions.set([...quiz.options]);
		this.editQuizCorrectIndex.set(quiz.correctOptionIndex);
		this.editQuizRevealAnswer.set(quiz.revealAnswer);
	}

	saveEditQuiz(): void {
		const quizId = this.editingQuizId();
		const question = this.editQuizQuestion().trim();
		const options = this._trimOptions(this.editQuizOptions());
		if (!quizId || !question || options.length < 2) {
			return;
		}

		this._quizService.update(quizId, {
			question,
			options,
			correctOptionIndex: Math.min(this.editQuizCorrectIndex(), options.length - 1),
			revealAnswer: this.editQuizRevealAnswer(),
		});
		this.cancelEditQuiz();
	}

	cancelEditQuiz(): void {
		this.editingQuizId.set(null);
		this.editQuizQuestion.set('');
		this.editQuizOptions.set([]);
		this.editQuizCorrectIndex.set(0);
		this.editQuizRevealAnswer.set(false);
	}

	deleteQuiz(quiz: Quiz): void {
		this._quizService.remove(quiz._id);
		if (this.editingQuizId() === quiz._id) {
			this.cancelEditQuiz();
		}
	}

	private _trimOptions(options: string[]): string[] {
		return options.map((option) => option.trim()).filter((option) => option.length > 0);
	}

	private _addOption(options: WritableSignal<string[]>): void {
		options.update((list) => [...list, '']);
	}

	private _removeOption(options: WritableSignal<string[]>, index: number): void {
		options.update((list) => (list.length > 2 ? list.filter((_, i) => i !== index) : list));
	}

	private _updateOption(options: WritableSignal<string[]>, index: number, value: string): void {
		options.update((list) => list.map((option, i) => (i === index ? value : option)));
	}
}
