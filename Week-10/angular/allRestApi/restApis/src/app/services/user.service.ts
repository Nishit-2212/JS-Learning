import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  getUser():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  saveUser(user:User):Observable<User> {
    return this.http.post<User>(this.url,user);
  }

  deleteUser(id:number):Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`)
  }

  getSelectedUser(id:number):Observable<User> {
    return this.http.get<User>(this.url+'/'+id)
  }
 
  updateUser(user:User) {
    return this.http.put<User>(this.url+'/'+user.id,user)
  }

}
