import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryAddComponent } from './category-add/category-add.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CategoryAddComponent
  ]
})
export class CategoryModule { }
