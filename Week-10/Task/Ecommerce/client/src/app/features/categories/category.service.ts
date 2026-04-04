import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { category } from '../../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  url = environment.apiUrl

  createCategory(category:category):Observable<any> {
    return this.http.post(this.url+'/api/category/create-category',category,{ observe: 'response'})
  }

}
