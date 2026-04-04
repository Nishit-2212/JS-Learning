import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { profileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [LoginComponent,profileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nishit';
  name = 'NN';

  hello() {
    let loc = 'ahm'
  }

  x=10;
  y=20;

  user1='peter';
  user2='anil';

  handleClickEvent() {
    alert("Function called");
    this.logss()
  }

  logss() {
    console.log("Function called");
  }


  Name="Anil";
  data:string|number="Hello"
  other:any=true
}
