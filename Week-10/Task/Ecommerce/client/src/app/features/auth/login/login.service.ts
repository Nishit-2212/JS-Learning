import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  LoginUser(user: User): Observable<any> {
    console.log('In service', user);

    // include credentials so cookies set by the server are accepted by the browser
    return this.http.post(this.url + '/api/auth/login', user, { withCredentials: true, observe: 'response' });
  }


}
