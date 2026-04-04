import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  getProductList():Observable<any> {
    const url = 'https://dummyjson.com/products'
    return this.http.get(url);
  }
  
}
