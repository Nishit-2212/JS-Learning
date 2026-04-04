import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [UserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Input() user:string=''

}
