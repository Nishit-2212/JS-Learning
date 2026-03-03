import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-writable-signal',
  imports: [],
  templateUrl: './writable-signal.component.html',
  styleUrl: './writable-signal.component.css'
})
export class WritableSignalComponent {

  data:WritableSignal<number | string> = signal(10);

  updateSignal() {
    // this.data.update(val=>val+1) // use update when you have only one datatype (like number,...)
    this.data.set("Hello")
  }

}
