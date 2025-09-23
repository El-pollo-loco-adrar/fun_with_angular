import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirige / vers /home
    { path: 'home', component: Home },

    {
        path: 'about',
        loadComponent: () => import('../about/about').then(m => m.About)
    },
    {
        path: 'text-interpolation',
        loadComponent: () => import('./lessons/text-interpolation/text-interpolation').then(m => m.TextInterpolation)
    },
    {
        path: 'property-binding',
        loadComponent: () => import('./lessons/property-binding/property-binding').then(m => m.PropertyBinding)
    },
    {
        path: 'friends',
        loadComponent: () => import('./friends/friends').then(m => m.Friends)
    },
    {
        path: '**',
        loadComponent: () => import('./no-found/no-found').then(m => m.NoFound)
    },
];
