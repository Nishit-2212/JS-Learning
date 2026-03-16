import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../../models/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})

export class ProductAddComponent {

  product: Product | undefined;

  constructor(private productService: ProductService, private router: Router) { }

  createProduct(val: NgForm) {
    this.product = val.value;
    console.log(this.product);

    if (this.product) {
      this.productService.addProduct(this.product).subscribe((res) => {
        console.log('response', res);

        if (res.status === 201) {
          alert('Product Created Succesfully')
          return this.router.navigateByUrl('/home')
        }

        return alert('Something Goes Wrong')
      })
    }
  }
}
