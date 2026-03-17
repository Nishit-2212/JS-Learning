import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/User.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;

  userLoaded = false;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  setUser(user: any) {
    if(this.userLoaded) return;

      console.log('setUser called with:', user);
      this.userLoaded = true
      return this.userSubject.next(user);
  }

  clearUser() {
    console.log('clearn user method called in authService');
    return this.userSubject.next(null)
  }

  signupUser(user: User): Observable<any> {
    return this.http.post(this.url + '/api/auth/signup', user, { observe: 'response' })
  }

  LoginUser(user: User): Observable<any> {
    console.log('In service', user);
    return this.http.post(this.url + '/api/auth/login', user, {
      withCredentials: true,
      observe: 'response'
    });
  }

}
