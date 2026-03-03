import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-condition',
  imports: [],
  templateUrl: './if-else-condition.component.html',
  styleUrl: './if-else-condition.component.css'
})



export class IfElseConditionComponent {

  display = false;
  x = 10
  btn1 = "See"
  toggleDiv= true

  showSquare(event: Event) {
    console.log("value is ", (event.target as HTMLButtonElement).value)
    const val = (event.target as HTMLButtonElement).value;

    if (val == "See") {
      this.display = true;
      this.btn1 = "Hide"
    }
    else {
      this.display = false;
      this.btn1 = "See"
    }
  }

  toggleColor() {
    this.toggleDiv = !this.toggleDiv
  }
}
