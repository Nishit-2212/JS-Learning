import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { adminGuard } from '../../core/guards/admins-only/admin.guard';

const routes: Routes = [
    { path:'add', component: CategoryAddComponent, canMatch:[adminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
