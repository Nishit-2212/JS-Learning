import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from './navbar.service';
import { AuthService } from '../../../features/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAdmin = false;

  constructor(private navbarService: NavbarService, private authService: AuthService) {
    if (!localStorage.getItem('isAdmin')) {
      localStorage.setItem('isAdmin', JSON.stringify(false))
    }

    if(localStorage.getItem('isAdmin') == 'true') {
      this.isAdmin = true;
    }
  }


  userName: any;
  isLoggedIn = false;

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      console.log('NavbarComponent received user:', user);
      this.userName = typeof user === 'string' ? user : null;
      this.isLoggedIn = !!this.userName;
      console.log('the user is changed');
      console.log('and the new user is', user);
      if (this.userName === null) {
        this.userName = 'Guest'
      }
    })
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
