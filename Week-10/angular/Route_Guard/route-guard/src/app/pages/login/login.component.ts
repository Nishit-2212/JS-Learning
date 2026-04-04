import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = ''

  constructor(private authService:AuthService) {}


  onSubmit() {
    const isUser = this.authService.login(this.email,this.password);
    console.log("is User",isUser);
    

    if(isUser) {
      this.errorMessage = '';
      // this.router.navigate(['/dashboard']);
      this.authService.navigateByUrl('/dashboard')
      console.log('Login Done')
    }
    else {
      this.errorMessage = 'Invalid email or password. plz try again'
    }
  }

}
