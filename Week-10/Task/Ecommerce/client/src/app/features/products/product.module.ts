import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductAddComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
