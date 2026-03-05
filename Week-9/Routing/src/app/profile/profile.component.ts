import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  constructor(private route:ActivatedRoute) {}

  userName:string|null=""

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    
    console.log(name);
    this.userName = name;
  }

}
