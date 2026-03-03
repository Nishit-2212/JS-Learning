import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  
    count = 1

    handleIncrement() {
      this.count++
    }

    handleDecrement() {
      if(this.count <= 0) {
        alert("the value can not be negative");
        return;
      }
      this.count--
    }

    handleReset() {
      this.count = 0
    }
}
