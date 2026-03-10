import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  productData:any

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productData = data.products;
    })
  }

}
