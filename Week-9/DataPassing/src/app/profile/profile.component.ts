import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  constructor(private route:ActivatedRoute) {}

  userName:string|null=""

  // Using Route Parameter
  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.userName = name;
  }

}
