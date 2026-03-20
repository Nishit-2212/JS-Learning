import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from './navbar.service';
import { AuthService } from '../../../features/auth/auth.service';
import { NgIf } from '@angular/common';
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  // private userSignal = signal<any>(null);

  constructor(private navbarService: NavbarService, public authService: AuthService) {
    
  }

  isLoggedIn = false;

  ngOnInit() {
    // if(localStorage.getItem('user')) {
    //   // this.userSignal = localStorage.getItem('user')
    //   this.userSignal.set(localStorage.getItem('user'))
    // }
    console.log('ngOnInit call in navBar component');
    
    this.authService.setUsers(localStorage.getItem('user'))
  }



  logOut() {
    this.navbarService.logOut().subscribe((res) => {
      console.log(res);

      if (res.status === 200) {
        localStorage.removeItem('user');
        // this.userSignal.set(null)
        // this.authService.clearUser();
        this.authService.logOut()
        return alert('You logged out successfully')
      }

      return alert('You are already logged out !!')
    })
  }



  // isAdmin = computed(() => {
  //   return this.userSignal()?.role === 'admin';
  // })

  // userName = computed(() => {
  //   return this.userSignal()?.username;
  // })

  // setUsers(user: User) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.userSignal.set(user);
  // }

  // logOut() {
  //   localStorage.removeItem('user');
  //   this.userSignal.set(null)
  // }

}
