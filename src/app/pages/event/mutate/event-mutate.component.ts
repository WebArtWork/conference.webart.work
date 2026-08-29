import { Component, computed, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { NEW_CHAPTER } from '../../../conference/chapter/chapter.const';
import { ChapterService } from '../../../conference/chapter/chapter.service';
import { NEW_EVENT } from '../../../conference/event/event.const';
import { EventService } from '../../../conference/event/event.service';
import { NEW_POLL } from '../../../conference/poll/poll.const';
import { PollService } from '../../../conference/poll/poll.service';
import { NEW_QUIZ } from '../../../conference/quiz/quiz.const';
import { QuizService } from '../../../conference/quiz/quiz.service';

/**
 * `/event/:slug/mutate` — create-or-edit form. Reached from `/events`'s
 * "Create event" action (a fresh, not-yet-persisted slug) or from an edit
 * entry point on an existing event. Structured in clearly separated
 * sections (basic info / chapters / initial polls-quizzes) so it can grow
 * into a fuller event-preparation screen without a rewrite.
 */
@Component({
	selector: 'app-event-mutate',
	imports: [ButtonModule, CardModule, InputTextModule, TextareaModule, FormsModule, TranslateDirective],
	templateUrl: './event-mutate.component.html',
	styleUrl: './event-mutate.component.scss',
})
export class EventMutateComponent {
	private readonly _router = inject(Router);
	private readonly _userService = inject(UserService);
	private readonly _eventService = inject(EventService);
	private readonly _chapterService = inject(ChapterService);
	private readonly _pollService = inject(PollService);
	private readonly _quizService = inject(QuizService);

	readonly slug = input.required<string>();

	readonly existingEvent = computed(() => this._eventService.bySlug(this.slug()) ?? null);
	readonly isNew = computed(() => !this.existingEvent());

	readonly title = signal('');
	readonly speaker = signal('');
	readonly description = signal('');

	readonly chapterTitles = signal<string[]>(['']);
	readonly initialPollQuestion = signal('');
	readonly initialPollOptions = signal('');
	readonly initialQuizQuestion = signal('');
	readonly initialQuizOptions = signal('');
	readonly initialQuizCorrectIndex = signal(0);

	constructor() {
		const existing = this.existingEvent();
		if (existing) {
			this.title.set(existing.title);
			this.speaker.set(existing.speaker);
			this.description.set(existing.description);
		}
	}

	addChapterField(): void {
		this.chapterTitles.update((titles) => [...titles, '']);
	}

	setChapterTitle(index: number, value: string): void {
		this.chapterTitles.update((titles) => titles.map((title, i) => (i === index ? value : title)));
	}

	removeChapterField(index: number): void {
		this.chapterTitles.update((titles) => titles.filter((_title, i) => i !== index));
	}

	save(): void {
		const ownerId = this._userService.user()?._id ?? '';
		const existing = this.existingEvent();

		const eventDoc = existing
			? this._eventService.update(existing._id, {
					title: this.title().trim(),
					speaker: this.speaker().trim(),
					description: this.description().trim(),
				})!
			: this._eventService.create({
					...NEW_EVENT,
					slug: this.slug(),
					owner: ownerId,
					title: this.title().trim(),
					speaker: this.speaker().trim(),
					description: this.description().trim(),
					createdAt: new Date().toISOString(),
				});

		if (this.isNew()) {
			this.chapterTitles()
				.map((title) => title.trim())
				.filter((title) => title.length > 0)
				.forEach((title, order) => {
					this._chapterService.create({ ...NEW_CHAPTER, eventId: eventDoc._id, title, order });
				});

			const pollQuestion = this.initialPollQuestion().trim();
			const pollOptions = this._splitOptions(this.initialPollOptions());
			if (pollQuestion && pollOptions.length >= 2) {
				this._pollService.create({ ...NEW_POLL, eventId: eventDoc._id, question: pollQuestion, options: pollOptions });
			}

			const quizQuestion = this.initialQuizQuestion().trim();
			const quizOptions = this._splitOptions(this.initialQuizOptions());
			if (quizQuestion && quizOptions.length >= 2) {
				this._quizService.create({
					...NEW_QUIZ,
					eventId: eventDoc._id,
					question: quizQuestion,
					options: quizOptions,
					correctOptionIndex: this.initialQuizCorrectIndex(),
				});
			}
		}

		this._router.navigate(['/event', eventDoc.slug, 'manage']);
	}

	private _splitOptions(raw: string): string[] {
		return raw
			.split(',')
			.map((option) => option.trim())
			.filter((option) => option.length > 0);
	}
}
