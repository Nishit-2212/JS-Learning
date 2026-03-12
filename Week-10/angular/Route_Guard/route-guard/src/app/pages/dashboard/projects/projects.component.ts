import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      id: 1, name: 'dasjdk'
    },
    {
      id: 2, name: 'cdsc3k'
    },
    {
      id: 3, name: 'cew4354df'
    }
  ];



}
