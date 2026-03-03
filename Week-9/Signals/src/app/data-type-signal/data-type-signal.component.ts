import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-type-signal',
  imports: [],
  templateUrl: './data-type-signal.component.html',
  styleUrl: './data-type-signal.component.css'
})
export class DataTypeSignalComponent {

  data = signal(<number | string>10)

  changeValue() {
    this.data.set("Hello");
  }
}
