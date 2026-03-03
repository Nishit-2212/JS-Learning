import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})

export class EffectComponent {

  num = signal(2)
  toggleDisplay = false

  constructor() {
    effect(() => {
      console.log("Value changes into ", this.num())
      if (this.num() == 2) {
        this.toggleDisplay = !this.toggleDisplay
      }
      else {
        this.toggleDisplay = false
      }
    })
  }

  incrementValue() {
    this.num.update(val => val + 1)

  }

}
