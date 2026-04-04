import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username=""

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      console.log(params)
      this.username = params['name']
    })
  }

}
