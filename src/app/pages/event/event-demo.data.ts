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
	title: 'Штучний інтелект у сучасній розробці',
	speaker: 'Демо-спікер',
	description: 'Приклад події для перегляду можливостей платформи без реєстрації.',
	state: 'live',
	createdAt: new Date().toISOString(),
};

export const DEMO_QUESTIONS: Question[] = [
	{
		_id: 'demo-question-1',
		eventId: DEMO_EVENT_ID,
		text: 'Чи варто студентам-програмістам уже зараз активно вивчати AI-інструменти?',
		authorName: 'Тарас Мельник',
		likes: 24,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-2',
		eventId: DEMO_EVENT_ID,
		text: 'Які навички програміста залишаться найбільш важливими після розвитку AI?',
		authorName: 'Олена Ткаченко',
		likes: 19,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-3',
		eventId: DEMO_EVENT_ID,
		text: 'Чи можна використовувати ChatGPT під час роботи над комерційними проєктами?',
		authorName: 'Ігор Бондар',
		likes: 15,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-4',
		eventId: DEMO_EVENT_ID,
		text: 'Як перевірити, що код, згенерований AI, справді безпечний?',
		authorName: 'Катерина Шевчук',
		likes: 12,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'demo-question-5',
		eventId: DEMO_EVENT_ID,
		text: 'Які AI-інструменти ви рекомендуєте початківцям у програмуванні?',
		authorName: 'Максим Гончар',
		likes: 8,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
];

export const DEMO_POLLS: Poll[] = [
	{
		_id: 'demo-poll-1',
		eventId: DEMO_EVENT_ID,
		question: 'Як часто ви використовуєте AI у своїй роботі або навчанні?',
		options: ['Щодня', 'Кілька разів на тиждень', 'Час від часу', 'Поки не використовую'],
		active: true,
	},
	{
		_id: 'demo-poll-2',
		eventId: DEMO_EVENT_ID,
		question: 'Для чого ви найчастіше використовуєте AI?',
		options: ['Написання коду', 'Пошук інформації', 'Навчання', 'Генерація ідей', 'Робота з текстами'],
		active: true,
	},
	{
		_id: 'demo-poll-3',
		eventId: DEMO_EVENT_ID,
		question: 'Чи може AI повністю замінити програміста в майбутньому?',
		options: ['Так', 'Ні', 'Частково', 'Важко сказати'],
		active: true,
	},
];

export const DEMO_POLL_RESULTS: Record<string, PollResult[]> = {
	'demo-poll-1': [
		{ optionIndex: 0, votes: 14 },
		{ optionIndex: 1, votes: 9 },
		{ optionIndex: 2, votes: 6 },
		{ optionIndex: 3, votes: 2 },
	],
	'demo-poll-2': [
		{ optionIndex: 0, votes: 12 },
		{ optionIndex: 1, votes: 8 },
		{ optionIndex: 2, votes: 5 },
		{ optionIndex: 3, votes: 7 },
		{ optionIndex: 4, votes: 3 },
	],
	'demo-poll-3': [
		{ optionIndex: 0, votes: 3 },
		{ optionIndex: 1, votes: 11 },
		{ optionIndex: 2, votes: 15 },
		{ optionIndex: 3, votes: 6 },
	],
};

export const DEMO_QUIZZES: Quiz[] = [
	{
		_id: 'demo-quiz-1',
		eventId: DEMO_EVENT_ID,
		question: 'Що означає AI?',
		options: ['Automated Internet', 'Artificial Intelligence', 'Advanced Interface', 'Application Integration'],
		correctOptionIndex: 1,
		revealAnswer: false,
		active: true,
	},
	{
		_id: 'demo-quiz-2',
		eventId: DEMO_EVENT_ID,
		question: 'Яка мова програмування часто використовується для роботи з AI?',
		options: ['Python', 'HTML', 'CSS', 'SQL'],
		correctOptionIndex: 0,
		revealAnswer: false,
		active: true,
	},
	{
		_id: 'demo-quiz-3',
		eventId: DEMO_EVENT_ID,
		question: 'Що таке Machine Learning?',
		options: [
			'Створення дизайну сайтів',
			"Метод навчання комп'ютерів на даних",
			'Розробка мобільних інтерфейсів',
			'Тестування мережі',
		],
		correctOptionIndex: 1,
		revealAnswer: false,
		active: true,
	},
	{
		_id: 'demo-quiz-4',
		eventId: DEMO_EVENT_ID,
		question: 'Що з цього є прикладом генеративного AI?',
		options: ['Калькулятор', 'ChatGPT', 'Файловий менеджер', 'Текстовий редактор'],
		correctOptionIndex: 1,
		revealAnswer: false,
		active: true,
	},
	{
		_id: 'demo-quiz-5',
		eventId: DEMO_EVENT_ID,
		question: 'Що важливо перевіряти під час використання AI для написання коду?',
		options: ['Тільки швидкість генерації', 'Коректність і безпеку коду', 'Кількість символів', 'Колір коду в редакторі'],
		correctOptionIndex: 1,
		revealAnswer: false,
		active: true,
	},
];

export const DEMO_QUIZ_RESULTS: Record<string, QuizResult[]> = {
	'demo-quiz-1': [
		{ optionIndex: 0, votes: 2, isCorrect: false },
		{ optionIndex: 1, votes: 21, isCorrect: true },
		{ optionIndex: 2, votes: 3, isCorrect: false },
		{ optionIndex: 3, votes: 1, isCorrect: false },
	],
	'demo-quiz-2': [
		{ optionIndex: 0, votes: 18, isCorrect: true },
		{ optionIndex: 1, votes: 3, isCorrect: false },
		{ optionIndex: 2, votes: 2, isCorrect: false },
		{ optionIndex: 3, votes: 4, isCorrect: false },
	],
	'demo-quiz-3': [
		{ optionIndex: 0, votes: 1, isCorrect: false },
		{ optionIndex: 1, votes: 19, isCorrect: true },
		{ optionIndex: 2, votes: 2, isCorrect: false },
		{ optionIndex: 3, votes: 1, isCorrect: false },
	],
	'demo-quiz-4': [
		{ optionIndex: 0, votes: 0, isCorrect: false },
		{ optionIndex: 1, votes: 22, isCorrect: true },
		{ optionIndex: 2, votes: 1, isCorrect: false },
		{ optionIndex: 3, votes: 0, isCorrect: false },
	],
	'demo-quiz-5': [
		{ optionIndex: 0, votes: 3, isCorrect: false },
		{ optionIndex: 1, votes: 17, isCorrect: true },
		{ optionIndex: 2, votes: 1, isCorrect: false },
		{ optionIndex: 3, votes: 2, isCorrect: false },
	],
};
