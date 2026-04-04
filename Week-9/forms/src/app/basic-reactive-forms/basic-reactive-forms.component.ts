import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './basic-reactive-forms.component.html',
  styleUrl: './basic-reactive-forms.component.css'
})
export class BasicReactiveFormsComponent {

  // If you want to tale bydefault value
  // name = new FormControl('nis');
  // password = new FormControl(123);

  name = new FormControl();
  password = new FormControl();

  enterLogin() {
    console.log(`Name is ${this.name.value} and password is ${this.password.value}`)
  }

  setValue() {
    this.name.setValue('NN');
    this.password.setValue('123')

  }

}
