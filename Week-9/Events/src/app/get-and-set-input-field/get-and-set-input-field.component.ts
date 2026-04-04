import { Component } from '@angular/core';

@Component({
  selector: 'app-get-and-set-input-field',
  imports: [],
  templateUrl: './get-and-set-input-field.component.html',
  styleUrl: './get-and-set-input-field.component.css'
})
export class GetAndSetInputFieldComponent {
 
  name=""
  displayName = ""
  email=""

  handleInput(event:any) {
    console.log("Get Input value",event.target.value)
    this.name = event.target.value;
  }
  


  handleSubmit() {
    console.log("Clicked")
    this.displayName = this.name;
  }

  setName() {
    this.name = "nishit"
  }


  getEmail(val:string) {
    console.log(val)
    this.email = val;
  }

}
