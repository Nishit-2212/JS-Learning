import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})


export class NumberOnlyDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedBtn = ['Backspace', 'Tab'];

    if ((event.key >= '0' && event.key <= '9') ||
      (event.key >= 'Numpad0' && event.key <= 'Numpad9') ||
      allowedBtn.includes(event.key)) {
      return;
    }
    else {
      event.preventDefault();
    }
  }
}
