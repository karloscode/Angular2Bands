import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstruccionComponent }  from './components/under-construccion.component';
import { BandsComponent }  from './components/bands.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full' ,  data: {
      metadata: {
        title: 'Angular Rocks',
        description: 'Esto es la descripción por defecto',
        keywords: 'angular rocks default'
      }}
	},
	{ path: 'foo', component: UnderConstruccionComponent ,  data: {
      metadata: {
        title: 'Angular Rocks',
        description: 'Esto es la descripción por defecto',
        keywords: 'angular rocks default'
      }}},
	{ path: 'bar', component: UnderConstruccionComponent ,  data: {
      metadata: {
        title: 'Angular Rocks',
        description: 'Esto es la descripción por defecto',
        keywords: 'angular rocks default'
      }}},
	{ path: ':url', component: BandsComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);