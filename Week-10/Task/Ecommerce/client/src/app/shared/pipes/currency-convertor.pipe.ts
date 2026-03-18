import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: any, ...args: number[]): unknown {

    console.log(args);


    let toDollar = value / 85
    let returnValue = toDollar.toFixed(2) + '$';
    console.log('In currencyConvertor', returnValue);
    return returnValue;


  }

}
