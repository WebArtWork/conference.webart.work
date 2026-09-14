import { Event } from '../../conference/event/event.interface';
import { Poll, PollResult } from '../../conference/poll/poll.interface';
import { Question } from '../../conference/question/question.interface';
import { Quiz, QuizResult } from '../../conference/quiz/quiz.interface';

/**
 * Front-end-only showcase fixtures for the public demo event (slug
 * `test-1`, linked from the landing page's "Try yourself as an organizer").
 * Both the public event page and the owner dashboard fall back to this data
 * whenever no real backend event exists at this slug (anonymous visitors
 * have no session to create one) or the real event has nothing of its own
 * yet — nothing here is ever sent to the server.
 */

export const DEMO_EVENT_SLUG = 'test-1';
export const DEMO_EVENT_ID = 'evt-demo-1';

export const DEMO_EVENT: Event = {
	_id: DEMO_EVENT_ID,
	slug: DEMO_EVENT_SLUG,
	owner: '',
	title: 'Гібридні мобільні додатки: Архітектура та екосистема',
	speaker: 'Демо-спікер',
	description: 'Приклад події для перегляду можливостей платформи без реєстрації.',
	state: 'live',
	createdAt: new Date().toISOString(),
};

export const DEMO_QUESTIONS: Question[] = [
	{
		_id: 'demo-question-1',
		eventId: DEMO_EVENT_ID,
		text: 'Чи потрібен Zone.js, якщо весь застосунок побудований на Signals?',
		authorName: 'Тарас Мельник',
		likes: 9,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-2',
		eventId: DEMO_EVENT_ID,
		text: 'Як synchронізувати signal зі значенням реактивної форми?',
		authorName: 'Олена Ткаченко',
		likes: 6,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-3',
		eventId: DEMO_EVENT_ID,
		text: 'Чи є сенс мігрувати великий NgRx-стор на Signals прямо зараз?',
		authorName: 'Ігор Бондар',
		likes: 3,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
];

export const DEMO_POLLS: Poll[] = [
	{
		_id: 'demo-poll-1',
		eventId: DEMO_EVENT_ID,
		question: 'Що краще описує Hybrid App?',
		options: ['Тільки веб', 'Веб + нативні можливості', 'Тільки Android', 'Тільки iOS'],
		active: true,
	},
	{
		_id: 'demo-poll-2',
		eventId: DEMO_EVENT_ID,
		question: 'Що відображає вебконтент усередині мобільного застосунку?',
		options: ['Capacitor', 'WebView', 'PWA', 'Cordova'],
		active: true,
	},
];

export const DEMO_POLL_RESULTS: Record<string, PollResult[]> = {
	'demo-poll-1': [
		{ optionIndex: 0, votes: 1 },
		{ optionIndex: 1, votes: 2 },
		{ optionIndex: 2, votes: 1 },
		{ optionIndex: 3, votes: 0 },
	],
	'demo-poll-2': [
		{ optionIndex: 0, votes: 0 },
		{ optionIndex: 1, votes: 4 },
		{ optionIndex: 2, votes: 0 },
		{ optionIndex: 3, votes: 0 },
	],
};

export const DEMO_QUIZZES: Quiz[] = [
	{
		_id: 'demo-quiz-1',
		eventId: DEMO_EVENT_ID,
		question: 'Яка головна перевага кросплатформної розробки?',
		options: ['Відсутність коду', 'Один код для кількох платформ', 'Робота тільки онлайн', 'Використання тільки Swift'],
		correctOptionIndex: 1,
		revealAnswer: true,
		active: true,
	},
];

export const DEMO_QUIZ_RESULTS: Record<string, QuizResult[]> = {
	'demo-quiz-1': [
		{ optionIndex: 0, votes: 3, isCorrect: false },
		{ optionIndex: 1, votes: 0, isCorrect: true },
		{ optionIndex: 2, votes: 1, isCorrect: false },
		{ optionIndex: 3, votes: 0, isCorrect: false },
	],
};
