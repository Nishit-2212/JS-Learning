import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-if',
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  login=false

  task=1

  changeTask() {
    this.task++
  }

}
