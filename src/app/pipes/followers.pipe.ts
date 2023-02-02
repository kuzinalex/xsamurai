import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    let valueK=(value/1000)
   if (valueK>10){
      return Math.floor(valueK)
    }else {
      return valueK.toFixed(1)
    }
  }

}
