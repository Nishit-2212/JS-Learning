import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;
  
  signupUser(user:User):Observable<any> {
    return this.http.post(this.url+'/api/auth/signup',user,{ observe: 'response'})
  }

   LoginUser(user: User): Observable<any> {
    console.log('In service', user);
    return this.http.post(this.url + '/api/auth/login', user, {
  withCredentials: true,
  observe: 'response'
});
  }

}
