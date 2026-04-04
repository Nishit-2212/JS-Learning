import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Output() getUsers= new EventEmitter();
  users=['Anil','Ramesh','Suresh','Mukesh','Sam','Peter']

  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }

  loadData() {
    console.log("Button clicked")
    this.getUsers.emit(this.users);
  }
  
}
