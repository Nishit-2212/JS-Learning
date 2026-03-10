import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users: User[] = [];

  selectedUser: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.userService.getUser().subscribe((data: User[]) => {
      this.users = data
    })
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      console.log("user", user);
      this.userService.saveUser(user).subscribe((data: User) => {
        if (data) {
          this.getUser();
        }
      });
    }
    else {
      const userData = {...user,id:this.selectedUser?.id}
      
      this.userService.updateUser(userData).subscribe((data:User) => {
        if(data) {
          this.getUser();
        }
      })
    }

  }

  deletedUser(id: number) {
    console.log(`You are trying to delete the user with ${id}`)
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser();
      }
    })
  }

  selectUser(id: number) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      console.log(data);
      this.selectedUser = data;
    })
  }

}
