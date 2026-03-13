import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName = 'Guest';

  constructor(private homeService:HomeService) {}
  
  load() {
    console.log('Loading');
    this.homeService.getUserFromToken().subscribe((res) => {
      console.log(res);
      
      this.userName = res.body.name;
    })
  }

  ngOnInit() {
    console.log('In init');
    this.homeService.getUserFromToken().subscribe((res) => {
      console.log(res);
      
      this.userName = res.body.name;
    })
  }

  // this.homeService.getUserFromToken().subscribe()

  

  

}
