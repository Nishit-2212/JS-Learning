import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users = [
    {
      id:'1',
      name:'Anil',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'2',
      name:'Peter',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'3',
      name:'Sam',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'4',
      name:'mukesh',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'5',
      name:'Suresh',
      age:28,
      email:'anil@test.com'
    },
  ]

}
