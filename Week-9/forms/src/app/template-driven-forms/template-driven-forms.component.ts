import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})

export class TemplateDrivenFormsComponent {

  userDetails: any
  addDetails(val: NgForm) {
    console.log(val)
    this.userDetails = val
  }

}
