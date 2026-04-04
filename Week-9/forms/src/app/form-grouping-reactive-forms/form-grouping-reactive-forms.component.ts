import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-grouping-reactive-forms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-grouping-reactive-forms.component.html',
  styleUrl: './form-grouping-reactive-forms.component.css'
})



export class FormGroupingReactiveFormsComponent {

  //  simple formGroup
  // profileForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormControl()
  // })


  // formGoup with validation
  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('/^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,4}$/')]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })


  onSubmit() {
    console.log("Submit Button CLicked");
    console.log(this.profileForm.value)
    console.log("email is ",this.profileForm.value.email)
  }

  get name() {
    return this.profileForm.get('name');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }

}
