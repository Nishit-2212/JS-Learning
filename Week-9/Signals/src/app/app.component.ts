import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTypeSignalComponent } from './data-type-signal/data-type-signal.component';
import { WritableSignalComponent } from './writable-signal/writable-signal.component';
import { ComputedSignalsComponent } from './computed-signals/computed-signals.component';
import { EffectComponent } from "./effect/effect.component";

@Component({
  selector: 'app-root',
  imports: [DataTypeSignalComponent, WritableSignalComponent, ComputedSignalsComponent, EffectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  count=signal(10)
  x=20

  constructor() {
    effect(() =>{
      console.log(this.count()) // if the signal is changed it will print this line
    })
  }

  updateValue() {
    this.x++
  }

  

}
