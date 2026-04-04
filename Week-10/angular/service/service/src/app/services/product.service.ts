import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() {
    console.log("Product Service");
  }

  getProductData() {
    return [
      {
        name: 'mobile', brand: 'samsung', price: '20000'
      },
      {
        name: 'laptop', brand: 'laptop', price: '3420000'
      },
      {
        name: 'PC', brand: 'pc', price: '10000'
      },
      {
        name: 'mobile', brand: 'samsung', price: '20000'
      }
    ]


  }

}
