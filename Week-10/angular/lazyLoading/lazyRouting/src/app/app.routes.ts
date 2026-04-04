import { Routes } from '@angular/router';

export const routes: Routes = [
    // {path:'admin', component:AdminComponent}

    {path:'admin',loadComponent:()=>import('./admin/admin.component').then((c)=>c.AdminComponent)}
    // or we can use loadChildren (genrally used in small component(like features, admin,etc..) that are not standlone)
];
