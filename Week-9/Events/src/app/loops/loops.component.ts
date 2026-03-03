import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent {

  users = ["Anil","Sam","Peter","Tony"]
  students=[
    { name:'Anil',age:29,email:"anil@gmail.com"},
    { name:'Sam',age:32,email:"sam@gmail.com"},
    { name:'Peter',age:31,email:"peter@gmail.com"},
    { name:'Tony',age:14,email:"tony@gmail.com"},
  ]

  getInfo(val:string) {
    console.log('info',val)
  }

}
