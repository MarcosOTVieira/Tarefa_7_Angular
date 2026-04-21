import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'sobre',
		loadComponent: () => import('./sobre.component').then((m) => m.SobreComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
