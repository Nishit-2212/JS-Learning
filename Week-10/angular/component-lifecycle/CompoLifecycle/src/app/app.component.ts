import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [UserComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('userComp') UserComponent?:UserComponent;

  counter = 0

  constructor() {
    afterRender(() => {
      console.log("After re-render")
    })

    afterNextRender(() => {
      console.log("Next Render");
      
    })
  }

  updateCounter() {
    this.counter++;
  }
  
}


