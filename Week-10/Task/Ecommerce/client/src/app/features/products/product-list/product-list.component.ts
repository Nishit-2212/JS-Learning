import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      console.log(res.body);
      this.products = res.body as Product[];
      console.log(this.products);
    })


  }

}
