import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'product',
        loadChildren: () => import('./features/products/product.module').then((m) => m.ProductModule)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'category',
        loadChildren: () => import('./features/categories/category.module').then((c) => c.CategoryModule)
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
