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
        name: 'mobile', branch: 'samsung', price: '20000'
      },
      {
        name: 'laptop', branch: 'laptop', price: '3420000'
      },
      {
        name: 'PC', branch: 'pc', price: '10000'
      },
      {
        name: 'mobile', branch: 'samsung', price: '20000'
      }
    ]


  }

}
