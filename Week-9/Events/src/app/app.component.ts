import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetAndSetInputFieldComponent } from './get-and-set-input-field/get-and-set-input-field.component';
import { IfElseConditionComponent } from './if-else-condition/if-else-condition.component';
import { LoopsComponent } from './loops/loops.component';

@Component({
  selector: 'app-root',
  imports: [GetAndSetInputFieldComponent,IfElseConditionComponent,LoopsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
// handleClick(event:MouseEvent)
// handleClick(event:Event)
  handleClick(event:any) {
    
    if(event.type == 'focus') {
      console.log("Focused")
      return 
    }

    console.log("Clicked",event)
    console.log("get a event type like click,...",event.type)
    console.log("class",event.target.classList)

    console.log("get Full <div> or tag",event.target)

    console.log("get value from input type text",event.target.value)

    
  }



}
