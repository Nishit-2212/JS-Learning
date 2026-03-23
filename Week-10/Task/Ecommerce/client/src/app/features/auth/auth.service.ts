import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/User.model';

export type SavedUser = {
  username: string;
  role: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private  STORAGE_KEY = 'user';

  user = signal<SavedUser | null>(null);

  url = environment.apiUrl;

  constructor(private http: HttpClient) {
    const json = localStorage.getItem(this.STORAGE_KEY);
    if (!json) {
      this.user.set(null);
      return;
    }
    try {
      const data = JSON.parse(json) as SavedUser;
      if (data?.username) {
        this.user.set(data);
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
        this.user.set(null);
      }
    } catch {
      localStorage.removeItem(this.STORAGE_KEY);
      this.user.set(null);
    }
  }

  saveUser(data: SavedUser): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    this.user.set(data);
  }

  clearUser(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.user.set(null);
  }

  logOut(): void {
    this.clearUser();
  }

  isAdmin(): boolean {
    return this.user()?.role?.toLowerCase() === 'admin';
  }

  signupUser(user: User): Observable<any> {
    return this.http.post(this.url + '/api/auth/signup', user, { observe: 'response' });
  }

  LoginUser(user: User): Observable<any> {
    return this.http.post(this.url + '/api/auth/login', user, {
      withCredentials: true,
      observe: 'response',
    });
  }
}
