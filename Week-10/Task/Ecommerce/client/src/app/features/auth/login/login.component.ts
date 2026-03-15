import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { User } from '../../../models/user.model';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  User:User | undefined;

  constructor(private authService:AuthService,private router:Router) {}

  checkDetails(val: NgForm) {
    this.User = val.value;
    console.log(this.User);

    if (this.User) {
      this.authService.LoginUser(this.User).subscribe((res) => {
        console.log(res);
        console.log('status',res.status);

        if(res.status === 200) {
          return this.router.navigateByUrl('/home',{replaceUrl:true})
          // return this.router.navigateByUrl('/home',{ skipLocationChange: true }) :: TODO
        }
        
        return alert('Incorrect email or password');
      });
    }
    

  }

}
