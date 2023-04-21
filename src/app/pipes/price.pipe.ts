import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, field:string): unknown {
    if(value==undefined ||value==null){
      return null;
    }
    switch(field){
      case 'floor_price' :{
        let value1=(value/1000000000)
        if(value1<100){
          return value1.toFixed(1);
        }
        return value1.toFixed(0);
      }
      case 'price_24h_change':{
        console.log(value)
        if(value>=100){
          return value.toFixed(0)
        }
        return value.toFixed(2);
      }
      case 'price_7d_change':{
        return value.toFixed(2);
      }
      case 'price_30d_change':{
        return value.toFixed(2);
      }
      case 'volume_24h':{
        if(value>1000){
          return (value/1000).toFixed(1);
        }
        return value.toFixed(0);
      }
      case 'total_volume':{
        if(value<100){
          return value.toFixed(1);
        }
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
