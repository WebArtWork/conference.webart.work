import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { withDomain } from '../../../conference/conference-domain';
import { DeviceIdService } from '../../../conference/device-id.service';
import { QuizAnswerService, QuizService } from '../../../conference/quiz/quiz.service';

/**
 * Public quiz-taking page: `quiz/:quizId?ids=<comma-separated quiz ids>`.
 * Mirrors `poll-public`: reached from a lecture's single "Take quiz" button,
 * walks every active quiz of that lecture one at a time, skipping ones the
 * visitor already answered. When a quiz has `revealAnswer` on, the page
 * pauses after each submit to show correct/incorrect before a "Next" click
 * advances — otherwise it advances immediately like a plain poll.
 */
@Component({
	selector: 'app-quiz-public',
	imports: [
		ButtonModule,
		CardModule,
		DialogModule,
		InputTextModule,
		RadioButtonModule,
		FormsModule,
		RouterLink,
		TranslateDirective,
	],
	templateUrl: './quiz-public.component.html',
	styleUrl: './quiz-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _quizService = inject(QuizService);
	readonly quizAnswerService = inject(QuizAnswerService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	readonly deviceIdService = inject(DeviceIdService);

	readonly lectureId = this._route.snapshot.queryParamMap.get('lecture');

	private readonly _quizIds = this._resolveQuizIds();
	readonly currentIndex = signal(0);
	readonly total = this._quizIds.length;

	readonly quiz = computed(() => {
		const id = this._quizIds[this.currentIndex()];
		return id ? (this._quizService.byId(id) ?? null) : null;
	});
	readonly finished = computed(() => this.currentIndex() >= this._quizIds.length);
	readonly position = computed(() => this.currentIndex() + 1);

	readonly selectedOption = signal<number | null>(null);
	readonly revealed = signal(false);
	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	constructor() {
		// Fallback load: the lecture page already preloads active quizzes before
		// linking here, but a visitor can also land on this URL directly.
		this._quizService.get({ query: withDomain() }).subscribe();

		effect(() => {
			const quizDoc = this.quiz();
			this._metaService.applyMeta({ title: quizDoc ? quizDoc.question : this.translateService.translate('Quiz')() });
		});

		// Skips quizzes already answered from an earlier visit as soon as the
		// data is known. Guarded by `revealed` so it never skips past the quiz
		// this visitor *just* answered while its correct/incorrect screen is showing.
		effect(() => {
			const quizDoc = this.quiz();
			if (quizDoc && this.quizAnswerService.hasAnswered(quizDoc) && !this.revealed()) {
				this.currentIndex.update((index) => index + 1);
			}
		});

		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});
	}

	submitAnswer(): void {
		this._withVisitorName(() => {
			const quizDoc = this.quiz();
			const optionIndex = this.selectedOption();
			if (!quizDoc || optionIndex === null) {
				return;
			}

			this.quizAnswerService.answer(quizDoc, optionIndex);
			if (quizDoc.revealAnswer) {
				this.revealed.set(true);
			} else {
				this._advance();
			}
		});
	}

	next(): void {
		this.revealed.set(false);
		this._advance();
	}

	confirmName(): void {
		this.deviceIdService.setVisitorName(this.nameDraft().trim());
		this.showNamePrompt.set(false);

		const pending = this._pendingInteraction;
		this._pendingInteraction = null;
		pending?.();
	}

	private _advance(): void {
		this.selectedOption.set(null);
		this.currentIndex.update((index) => index + 1);
	}

	private _withVisitorName(action: () => void): void {
		if (this.deviceIdService.visitorName()) {
			action();
			return;
		}

		this._pendingInteraction = action;
		this.showNamePrompt.set(true);
	}

	private _resolveQuizIds(): string[] {
		const raw = this._route.snapshot.queryParamMap.get('ids');
		if (raw) {
			return raw
				.split(',')
				.map((id) => id.trim())
				.filter((id) => id.length > 0);
		}

		const pathId = this._route.snapshot.paramMap.get('quizId');
		return pathId ? [pathId] : [];
	}
}
