import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TwoWayBindingComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  users = ['Anil', 'Sunil', 'Suresh', 'Ramesh', 'Mahesh'];

}
