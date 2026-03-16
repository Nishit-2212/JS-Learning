import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../features/auth/auth-routing.module";
import { NavbarService } from './navbar.service';
import { AuthService } from '../../../features/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [AuthRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private navbarService: NavbarService, private authService: AuthService) { }

  userName = 'Guest';

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      console.log('NavbarComponent received user:', user); // Debugging log
      this.userName = user;
      console.log('the user is changed');
      console.log('and the new user is', user);
    })
  }
  
}
