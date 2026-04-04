import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router) {}

  goToLogin() {
    console.log("button clicked")
    this.router.navigate(['login'],{queryParams:{name:'Nishit Nagar'}})
  }

  goToLoginData(name:string) {
    this.router.navigate(['login'],{queryParams:{name:name}})
  }

}
