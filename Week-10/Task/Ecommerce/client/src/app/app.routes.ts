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
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'product-list',
        loadComponent: () => import('./features/products/product-list/product-list.component').then((c) => c.ProductListComponent)
    },
    {
        path: 'product-add',
        loadComponent: () => import('./features/products/product-add/product-add.component').then((c) => c.ProductAddComponent)
    },
    {
        path: 'product-edit/:id',
        loadComponent: () => import('./features/products/product-add/product-add.component').then((c) => c.ProductAddComponent)
    },
    {
        path: 'category-add',
        loadComponent: () => import('./features/categories/category-add/category-add.component').then((c) => c.CategoryAddComponent)
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
