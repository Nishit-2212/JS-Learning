import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  students = ["Anil","Sam","Peter","Vinay","Bruce"]

  studentsData=[
    {
      name:"Anil",
      age:29,
      email:'anil@gmail.com'
    },
    {
      name:"Suresh",
      age:22,
      email:'suresh@gmail.com'
    },
    {
      name:"Ramesh",
      age:35,
      email:'ramesh@gmail.com'
    },
    {
      name:"Mukesh",
      age:38,
      email:'mukesh@gmail.com'
    },
    {
      name:"sukesh",
      age:39,
      email:'sukesh@gmail.com'
    }
  ]

}
