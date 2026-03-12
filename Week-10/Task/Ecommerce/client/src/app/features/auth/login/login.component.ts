import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { User } from '../../../models/User.model';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  User:User | undefined;

  constructor(private loginService:LoginService) { }

  checkDetails(val: NgForm) {
    this.User = val.value;
    console.log(this.User);

    if (this.User) {
      this.loginService.LoginUser(this.User).subscribe((res) => {
        console.log(res);
      });
    }
    

  }

}
