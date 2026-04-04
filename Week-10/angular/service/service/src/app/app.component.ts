import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  productData: {
    name: string;
    brand: string;
    price: string;
  }[]| undefined;

  constructor(private productService: ProductService) {
  }

  getProductData() {
    console.log("Button clicked");
    
    this.productData = this.productService.getProductData()
    console.log(this.productData);
    
  }

}
