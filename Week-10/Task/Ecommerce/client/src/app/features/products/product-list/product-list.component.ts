import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product.model';
import { NgFor } from '@angular/common';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  @Input() userRole: string = ''

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res) => {
      console.log(res.body);
      this.products = res.body as Product[];
      console.log(this.products);

      console.log('Role', this.userRole);
    })
  }


  deleteProduct(id:any) {
    this.productService.deleteProduct(id).subscribe((res) => {
      console.log('response',res);
      
      if(res.status === 200) {
        this.getAllProducts();
        return alert('product Deleted successfully');
      }
    })
  }

  
}
