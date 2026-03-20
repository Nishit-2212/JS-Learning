import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;

  getCurrentUser(): Observable<any> {
    return this.http.get(this.url + '/api/auth/verifyToken', { observe: 'response' })
  }

}
