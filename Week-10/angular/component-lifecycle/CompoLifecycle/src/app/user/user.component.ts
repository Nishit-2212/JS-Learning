import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  name = 'Nishit'

  // constructor() {
  //   console.log("Constructor Run first on component load");
  //   this.name = 'sid'
  // }

  // ngOnInit() {
  //   console.log("ngOnInit will run after constructor")
  //   this.name = 'sam'
  // }


  // ngOnDestroy() {
  //   console.log("Destroy");
  //   alert("Component Destroy")
  // }


  @Input() counter:number=0


  ngOnChanges() {
    console.log("Inside User Component:- Counter in changed");
  }

  
}
