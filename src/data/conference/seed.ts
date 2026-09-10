import { Chapter, ChapterReaction } from '../../app/conference/chapter/chapter.interface';
import { Conference } from '../../app/conference/conference.interface';
import { Event } from '../../app/conference/event/event.interface';
import { Lecture } from '../../app/conference/lecture/lecture.interface';
import { Poll, PollAnswer } from '../../app/conference/poll/poll.interface';
import { Question } from '../../app/conference/question/question.interface';
import { Quiz, QuizAnswer } from '../../app/conference/quiz/quiz.interface';

/**
 * Static demo fixtures for the Conference domain. There is no backend for
 * this domain: each entity service seeds its `localStorage`-backed store
 * from the matching array below the first time it runs in a browser.
 */

export const SEED_CONFERENCES: Conference[] = [
	{
		_id: 'conf-kpnu-2026-2027',
		title: 'КПНУ 2026-2027',
	},
];

export const SEED_EVENTS: Event[] = [
	{
		_id: 'evt-demo-1',
		slug: '1042-8837',
		owner: '',
		title: 'Building With Angular Signals',
		speaker: 'Olena Petrenko',
		description:
			'A deep dive into signals-first Angular apps, from reactive primitives to zoneless change detection.',
		state: 'live',
		createdAt: new Date().toISOString(),
	},
];

export const SEED_LECTURES: Lecture[] = [
	{
		_id: 'conf-kpnu-2026-2027-1',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Гібридні мобільні додатки:  Архітектура та екосистема',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/hybrid-mobile-apps',
	},
	{
		_id: 'conf-kpnu-2026-2027-2',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Архітектура frontend мобільного застосунку',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/frontend-architecture',
	},
	{
		_id: 'conf-kpnu-2026-2027-3',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Дані, API, авторизація та Offline',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/data-api-offline',
	},
	{
		_id: 'conf-kpnu-2026-2027-4',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Мобільна платформа, Capacitor та Native API',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/native-api',
	},
	{
		_id: 'conf-kpnu-2026-2027-5',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Створення та налаштування Hybrid-проєкту на Angular',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/hybrid-project-setup',
	},
	{
		_id: 'conf-kpnu-2026-2027-6',
		conferenceId: 'conf-kpnu-2026-2027',
		title: 'Build, Deployment та публікація застосунку',
		speaker: '',
		topic: '',
		time: '',
		description: '',
		content: '',
		link: 'https://hybrid-mobile-applications.webart.work/build-deployment',
	},
];

export const SEED_CHAPTERS: Chapter[] = [
	{ _id: 'chp-demo-1', eventId: 'evt-demo-1', title: 'Introduction', order: 0, isActive: false },
	{ _id: 'chp-demo-2', eventId: 'evt-demo-1', title: 'Problem', order: 1, isActive: false },
	{ _id: 'chp-demo-3', eventId: 'evt-demo-1', title: 'Signals in Practice', order: 2, isActive: true },
	{ _id: 'chp-demo-4', eventId: 'evt-demo-1', title: 'Demo', order: 3, isActive: false },
	{ _id: 'chp-demo-5', eventId: 'evt-demo-1', title: 'Q&A', order: 4, isActive: false },
];

export const SEED_CHAPTER_REACTIONS: ChapterReaction[] = [];

export const SEED_QUESTIONS: Question[] = [
	{
		_id: 'que-demo-1',
		eventId: 'evt-demo-1',
		text: 'How does this compare to RxJS-based state management?',
		authorName: 'Max',
		likes: 4,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
	{
		_id: 'que-demo-2',
		eventId: 'evt-demo-1',
		text: 'Any plans to support signal-based forms in production soon?',
		authorName: 'Ira',
		likes: 1,
		likedBy: [],
		createdAt: new Date().toISOString(),
	},
];

export const SEED_POLLS: Poll[] = [
	{
		_id: 'pol-demo-1',
		eventId: 'evt-demo-1',
		question: 'What should we cover next?',
		options: ['More signals internals', 'Testing strategies', 'Migration stories'],
		active: true,
	},
];

export const SEED_POLL_ANSWERS: PollAnswer[] = [];

export const SEED_QUIZZES: Quiz[] = [
	{
		_id: 'qui-demo-1',
		eventId: 'evt-demo-1',
		question: 'Which function creates a writable signal?',
		options: ['computed()', 'signal()', 'effect()'],
		correctOptionIndex: 1,
		revealAnswer: false,
		active: true,
	},
];

export const SEED_QUIZ_ANSWERS: QuizAnswer[] = [];
