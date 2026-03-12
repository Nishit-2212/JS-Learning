import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  User:User | undefined
  checkDetails(val: NgForm) {
    console.log(val);
    this.User = val;
  }

}
