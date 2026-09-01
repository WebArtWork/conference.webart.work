import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-attendees.component').then((m) => m.ForAttendeesPageComponent),
	},
];
