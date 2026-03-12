import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



// export class AppComponent {

//   productData: any;
//   constructor(private productService: ProductService) {
//   }

//   ngOnInit() {

//     this.productService.getProductList().subscribe((data: any) => {
//       console.log(data);
//       this.productData = data.products;
//     })
//   }
// }




export class AppComponent {

  productData$: Observable<any>;

  constructor(private productService: ProductService) {
    this.productData$ = this.productService.getProductList();
  }

   trackProduct(index: number, product: any) {
    return product.id; // assuming each product has a unique id
  }

}
