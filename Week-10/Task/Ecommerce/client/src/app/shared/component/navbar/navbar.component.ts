import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from './navbar.service';
import { AuthService } from '../../../features/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgIf ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private navbarService: NavbarService, public authService: AuthService) {
  }

  isLoggedIn = false;

  ngOnInit() {
    
  }


  logOut() {
    this.navbarService.logOut().subscribe((res) => {
      console.log(res);

      if (res.status === 200) {
        this.authService.clearUser();
        return alert('You logged out successfully')
      }

      return alert('You are already logged out !!')
    })
  }

}
