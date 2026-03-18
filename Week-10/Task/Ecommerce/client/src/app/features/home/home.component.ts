import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';
import { ProductAddComponent } from "../products/product-add/product-add.component";
import { ProductListComponent } from "../products/product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  userName = 'Guest';
  role = 'user';

  constructor(private homeService: HomeService,private authService:AuthService) { }

  ngOnInit() {
    console.log('In init');
    this.homeService.getUserFromToken().subscribe((res) => {
      console.log(res.body.role);
      this.role = res.body.role;
      this.userName = res.body.name;
    })
  }

  load() {
    console.log('Loading');
    this.homeService.getUserFromToken().subscribe((res) => {
      console.log(res);

      this.userName = res.body.name;
    })
  }


  // this.homeService.getUserFromToken().subscribe()

  clean() {
    this.authService.clearUser()
  }



}
