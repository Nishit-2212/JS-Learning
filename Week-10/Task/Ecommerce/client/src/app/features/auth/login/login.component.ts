import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../../../models/User.model';
import { environment } from '../../../../environments/environment.development';

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
          this.authService.setUser(res.body.data.username);
          console.log('res.body.data.username and res.data.role',res.body.data.username,res.body.data.role);
          
          return this.router.navigateByUrl('/home',{replaceUrl:true})
          // return this.router.navigateByUrl('/home',{ skipLocationChange: true }) :: TODO
        }
        
        return alert('Incorrect email or password');
      });
    }
  }

}
