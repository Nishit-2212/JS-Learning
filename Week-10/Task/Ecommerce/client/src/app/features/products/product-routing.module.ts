import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { adminGuard } from '../../core/guards/admins-only/admin.guard';

const routes: Routes = [
  { path: 'add', component: ProductAddComponent, canMatch: [adminGuard]},
  { path: 'edit/:id', component: ProductAddComponent, canMatch: [adminGuard]}
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
