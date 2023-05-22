import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolumeStatisticModel } from '../model/VolumeStatisticModel';
import {RestServiceService} from "../service/rest-service.service";

@Component({
  selector: 'app-volumes-statistic',
  templateUrl: './volumes-statistic.component.html',
  styleUrls: ['./volumes-statistic.component.css']
})
export class VolumesStatisticComponent implements OnInit {

  constructor(private service:RestServiceService, private router: Router) { }

  currentVolumesBlockchain:string='Solana';
  currentVolumesSortingField:string='volume_24h';
  isFloorPriceDesc:boolean=true;
  isPrice24Desc:boolean=true;
  isPrice7DDesc:boolean=true;
  isPrice30DDesc:boolean=true;
  isVolume24Desc:boolean=true;
  isTotalVolumeDesc:boolean=true;

  isLoaded:boolean=false;

  volumes:VolumeStatisticModel[]=[
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:20900000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:2090000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
  //   {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0}
  // 
]

  overviewChart: any;
  overviewOptions: any;


  ngOnInit(): void {

    this.service.getVolumeChanges("volume_24h", "desc", "Solana", 50,0).subscribe(data=>{
      console.log(data);

      this.volumes=data.results;
      this.isLoaded=true;
    },
        error => { console.log("NO CONNECTION TO BACKEND")})


    this.service.getCollectionChart("degods",'overview').subscribe(data=>{
    
          console.log(data);

          this.overviewChart = {
              labels: data.data.labels,
              datasets: [
                  {
                      label: 'Price',
                      data: data.data.datasets.map(this.mapPrice),
                      //fill: true,
                      //borderColor: documentStyle.getPropertyValue('--black-500'),
                      tension: 0.1,
                      borderColor: "rgba(12, 168, 35)",
                      backgroundColor: "rgba(12, 168, 35)",
                      pointBackgroundColor: "rgba(12, 168, 35)",
                      pointBorderColor: "rgba(12, 168, 35)",
                      pointHoverBackgroundColor: "rgba(12, 168, 35)",
                      pointHoverBorderColor: "rgba(12, 168, 35)",
                  }
              ]
          };

      })

      // const documentStyle = getComputedStyle(document.documentElement);
      //   const textColor = documentStyle.getPropertyValue('--text-color');
      //   const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      //   const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.overviewOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                display:false,
                labels: {
                    //color: textColor
                }
            }
        },
        scales: {
            x: {
              display:false,
                ticks: {
                    display: false,
                    //color: textColorSecondary
                },
                grid: {
                    //color: surfaceBorder,
                    display: false
                }
            },
            y: {
              display:false,
                ticks: {
                    display: false,
                    //color: textColorSecondary
                },
                grid: {
                    //color: surfaceBorder,
                    display: false,
                    drawBorder:false,
                    tickLength : 0
                }
            }
        }
    };
  }

  loadVolumeChanges(sorting_field:string, sorting_order:string,blockchain:string){
    this.isLoaded=false;
    
    this.currentVolumesBlockchain=blockchain;
    this.currentVolumesSortingField=sorting_field;

    console.log(blockchain);
    this.service.getVolumeChanges(sorting_field, sorting_order, blockchain, 50,0).subscribe(data=>{
        console.log(data);

        this.volumes=data.results;
        this.isLoaded=true;
        console.log("YES CONNECTION TO BACKEND")
      },
      error => { console.log("NO CONNECTION TO BACKEND")})
  }

  navigateToDetails(collection:any){
    this.router.navigate(["collections", collection.collection_symbol]);
  }


  onVolumesSort(sorting_field: string) {
    console.log(this.isPrice24Desc);
    let order = '';
    switch (sorting_field) {
      case 'floor_price':{
        if(this.isFloorPriceDesc){
          order = 'asc';
        }else{
          order = 'desc'
        }
        this.isFloorPriceDesc=!this.isFloorPriceDesc;
        break;
      }
      case 'price_24h_change': {
        if (this.isPrice24Desc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isPrice24Desc = !this.isPrice24Desc;
        break;
      }
      case 'price_7d_change': {
        if (this.isPrice7DDesc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isPrice7DDesc = !this.isPrice7DDesc;
        break;
      }
      case 'price_30d_change': {
        if (this.isPrice30DDesc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isPrice30DDesc = !this.isPrice30DDesc;
        break;
      }
      case 'volume_24h': {
        if (this.isVolume24Desc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isVolume24Desc = !this.isVolume24Desc;
        break;
      }
      case 'total_volume': {
        if (this.isTotalVolumeDesc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isTotalVolumeDesc = !this.isTotalVolumeDesc;
        break;
      }
    }
    console.log(order);
    this.loadVolumeChanges(sorting_field, order, this.currentVolumesBlockchain)
  }

  isPriceChangePositive(value:number):boolean{
    return value>0;
  }

  mapPrice(price:number){
    let value1=(price/1000000000)
    if(value1<100){
      return value1.toFixed(1);
    }
    return value1.toFixed(0);
}

}
