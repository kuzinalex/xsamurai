import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, field:string): unknown {
    switch(field){
      case 'floor_price' :{
        let value1=(value/1000000000)
        if(value1<100){
          return value1.toFixed(1);
        }
        return value1.toFixed(0);
      }
      case 'price_24h':{
        return value.toFixed(2);
      }
      case 'price_7d':{
        return value.toFixed(2);
      }
      case 'price_30d':{
        return value.toFixed(2);
      }
      case 'volume_24h':{
        return (value/1000).toFixed(1);
      }
      case 'total_volume':{
        if(value<1000000){
          return (value/1000).toFixed(1)+'K';
        }else{
          return (value/1000000).toFixed(1)+'M';
        }
        
      }
      default:{
        return 0;
      }
    }
   
  }

}
