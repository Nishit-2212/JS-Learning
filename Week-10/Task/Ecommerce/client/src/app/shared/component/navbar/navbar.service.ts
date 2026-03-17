import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;

  getUserFromToken():Observable<any> {
    return this.http.get(this.url+'/api/auth/verifyToken', { observe: 'response'})
  }

  logOut():Observable<any> {
    return this.http.get(this.url+'/api/auth/logout', { observe: 'response' })
  }

}
