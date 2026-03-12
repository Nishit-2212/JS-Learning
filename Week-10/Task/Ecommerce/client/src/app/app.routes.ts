import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent)
    },
    {
        path: 'sign-up',
        loadComponent: () => import('./features/auth/sign-up/sign-up.component').then((c) => c.SignUpComponent)
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
