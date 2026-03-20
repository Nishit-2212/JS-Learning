import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/User.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private storageKey = 'auth_user';
  private userSignal = signal<any>(null);


  constructor(private http: HttpClient) {
    const savedUser = this.getSavedUser();
    if (savedUser) {
      this.userSubject.next(savedUser);
    }
    // if(this.getUserFromLocalStorage()) {
    //   this.userSignal.set(JSON.parse(localStorage.getItem('user')))
    // }

    if (localStorage.getItem('user')) {
      // this.userSignal = localStorage.getItem('user')
      this.userSignal.set(localStorage.getItem('user'))
    }

  }


  url = environment.apiUrl;

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: any, role: any) {
    console.log('setUser called with:', user);
    this.saveUser(user, role);
    return this.userSubject.next(user);
  }

  clearUser() {
    console.log('clean user method called in authService');
    this.clearSavedUser();
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

  private getSavedUser(): any | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  private saveUser(user: any, role: any) {
    if (user === null || user === undefined) {
      this.clearSavedUser();
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    if (role === 'admin') {
      localStorage.setItem('isAdmin', JSON.stringify(true))
    }
    else {
      localStorage.setItem('isAdmin', JSON.stringify(false))
    }
  }

  private clearSavedUser() {
    localStorage.removeItem(this.storageKey);
    localStorage.setItem('isAdmin', JSON.stringify(false))
  }

  // userFromLocal: any = this.getUserFromLocalStorage();
  getUserFromLocalStorage(): boolean {
    //  this.userFromLocal = JSON.parse(localStorage.getItem<string|null>('user'))
    return (localStorage.getItem('user') ? true : false);
  }

  // private userSignal = signal<User | null>(null);

  isAdmin = computed(() => {
    return this.userSignal()?.role === 'admin';
  })

  userName = computed(() => {
    return this.userSignal()?.username;
  })

  setUsers(user: any) {
    console.log(user);
    
    localStorage.setItem('user', JSON.stringify(user));
    this.userSignal.set(user);
  }

  logOut() {
    localStorage.removeItem('user');
    this.userSignal.set(null)
  }

}
