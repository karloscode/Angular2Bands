import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstruccionComponent }  from './components/under-construccion.component';
import { BandsComponent }  from './components/bands.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{ path: 'foo', component: UnderConstruccionComponent},
	{ path: 'bar', component: UnderConstruccionComponent},
	{ path: ':nombre', component: BandsComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);