import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../../../environments/environment.development';
import { User } from '../../../models/User.model';
import { NgIf } from '@angular/common';
import { NavbarService } from '../../../shared/component/navbar/navbar.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, HttpClientModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  User: User | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  checkDetails(val: NgForm) {
    this.User = val.value;
    console.log(this.User);

    if (this.User) {
      this.authService.LoginUser(this.User).subscribe({

        next: (res) => {
          console.log('res', res);

          if (res.status === 200) {
            this.authService.saveUser({
              username: res.body.data.username,
              role: res.body.data.role,
            });

            this.router.navigateByUrl('/home', { replaceUrl: true });
            alert('Logged In succesfull')
            return;
          }
          alert('Incorrect email or password');
        },

        error: (err) => {
          console.error('Error occurred:', err);

          if(err.status === 404) {
            console.log('err message',err.error.message);
            alert(err.error.message)
          }
          else {
            console.log('smething goes wrong');
          }
        }
      });
    }
  }

}
