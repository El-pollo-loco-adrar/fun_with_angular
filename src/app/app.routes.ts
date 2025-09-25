import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuardService } from './services/auth-guard';

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
        path: 'jeffTp',
        loadComponent: () => import('./jeff-tp1/jeff-tp1').then(m => m.JeffTp1)
    },
    {
        path: 'meteo',
        loadComponent: () => import('./lessons/meteo-api/meteo-api').then(m => m.MeteoApi)
    },
    {
        path: 'pokemon',
        loadComponent: () => import('./pokemon-compo/pokemon-compo').then(m => m.PokemonCompo)
    },
    {
        path: 'parent',
        loadComponent: () => import('./lessons/parent/parent').then(m => m.Parent)
    },
    {
        path: 'task',
        loadComponent: () => import('./task-list-firebase/task-list-firebase').then(m => m.TaskListFirebase)
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register').then(m => m.Register)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login').then(m => m.Login)
    },
    {
        path:'dashboard',
        canActivate: [AuthGuardService],
        loadComponent:()=>import('./auth/dashboard/dashboard').then(m=>m.Dashboard)
    },
    {
        path: 'papa',
        loadComponent: () => import('./tpInput/papa/papa').then(m => m.Papa)
    },
    
    
    {
        path: '**',
        loadComponent: () => import('./no-found/no-found').then(m => m.NoFound)
    },
];
