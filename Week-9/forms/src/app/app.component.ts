import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicReactiveFormsComponent } from './basic-reactive-forms/basic-reactive-forms.component';
import { FormGroupingReactiveFormsComponent } from './form-grouping-reactive-forms/form-grouping-reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicReactiveFormsComponent, FormGroupingReactiveFormsComponent, TemplateDrivenFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'forms';
}
