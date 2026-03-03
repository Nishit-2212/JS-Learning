import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})

export class ComputedSignalsComponent {

  // a = 10
  // b = 20
  // c = this.a+this.b


  // calculate() {
  //   this.x=40 
  //   console.log(this.c)
  // }

  // ----------------------------------------------------------------------------

  x=signal(10);
  y=signal(20);
  z=computed(() =>this.x()+this.y())

  calculate() {
    console.log(this.z());
    // this.y.update(val=>val=100)
    this.y.set(100)
    console.log(this.z());
  }

}
