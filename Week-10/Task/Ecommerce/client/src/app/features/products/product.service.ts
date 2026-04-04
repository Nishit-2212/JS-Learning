import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;

  getProducts():Observable<any>{
    return this.http.get(this.url + '/api/product/list',{ observe: 'response'})
  }

  addProduct(product: Product):Observable<any> {
    return this.http.post(this.url + '/api/product/create-product',product,{ observe: 'response'})
  }

  getAllCategory():Observable<any> {
    return this.http.get(this.url+'/api/category/', { observe: 'response'})
  }

  getProductById(id:number):Observable<any> {
    return this.http.get(this.url+'/api/product/'+id,{ observe: 'response' })
  }

  editProduct(product:Product):Observable<any> {
    return this.http.put(this.url+'/api/product/update-product',product,{ observe: 'response'})
  }

  deleteProduct(id:number) {
    return this.http.delete(this.url+'/api/product/'+id, { observe: 'response'})
  }

}
