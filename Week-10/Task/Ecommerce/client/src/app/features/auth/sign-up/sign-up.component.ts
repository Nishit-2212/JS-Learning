import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../auth.service';
import { User } from '../../../models/User.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent {

  User: User | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  signupUser(val: NgForm) {
    this.User = val.value;
    console.log(this.User);

    if (this.User) {
      this.authService.signupUser(this.User).subscribe((res) => {
        console.log(res);

        if (res.status === 201) {
          return this.router.navigateByUrl('/login', { replaceUrl: true })
        }

        return alert('Something Goes wrong')
      })
    }
  }

}
