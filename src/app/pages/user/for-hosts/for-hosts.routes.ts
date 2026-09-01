import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-hosts.component').then((m) => m.ForHostsPageComponent),
	},
];
