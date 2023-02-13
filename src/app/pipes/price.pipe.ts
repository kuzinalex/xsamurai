import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let value1=(value/1000000000)

    if(value1<100){
      return value1.toFixed(1)
    }
    return value1;
  }

}
