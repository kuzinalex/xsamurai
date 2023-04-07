import {Component, Inject, OnInit} from '@angular/core';
import {MintModel} from "../model/MintModel";
import { DOCUMENT } from '@angular/common';
import {RestServiceService} from "../service/rest-service.service";
import {VolumeStatisticModel} from "../model/VolumeStatisticModel";
import {ChartModule} from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-gem-searcher',
  templateUrl: './gem-searcher.component.html',
  styleUrls: ['./gem-searcher.component.css']
})
export class GemSearcherComponent implements OnInit {

  mintsSortValues:string[]=[
    "Mint Date asc",
    "Mint Date desc",
    "Supply asc",
    "Supply desc",
    "Twitter asc",
    "Twitter desc"
  ]

  mintsFilterBlockchains:string[]=[
    "Solana",
    "Ethereum"
  ]

  sortingMap = new Map<string, string>([
    ["Mint Date asc", "mint_date"],
    ["Mint Date desc", "mint_date"],
    ["Supply asc", "total_supply"],
    ["Supply desc", "total_supply"],
    ["Twitter asc","twitter_followers"],
    ["Twitter desc","twitter_followers"]
  ]);

  orderMap = new Map<string, string>([
    ["Mint Date asc", "asc"],
    ["Mint Date desc", "desc"],
    ["Supply asc", "asc"],
    ["Supply desc", "desc"],
    ["Twitter asc","asc"],
    ["Twitter desc","desc"]
  ]);

  currentMintsSortValue:string=this.mintsSortValues[0];
  currentMintsFilterBlockchain:string=this.mintsFilterBlockchains[0];

  currentVolumesBlockchain:string=this.mintsFilterBlockchains[0];
  isPrice24Desc:boolean=true;
  isPrice7DDesc:boolean=true;
  isPrice30DDesc:boolean=true;
  isVolume24Desc:boolean=true;
  isTotalVolumeDesc:boolean=true;


  sorting_field:string|undefined="mint_date";
  sorting_order:string|undefined="asc"

  limit:number=6;
  offset:number=0;
  offsetStep:number=6;

  dataSize:number=0;

  isBottomFloorLoaded:boolean=false;
  isTopFloorLoaded:boolean=false;
  isVolumesLoaded:boolean=false;


  isLoading:boolean=false;


  mints:MintModel[]=  [
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 312123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 31243, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 312, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 }
   ];


  volumes:VolumeStatisticModel[]=[
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:20900000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:2090000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209, price_24h_change:0, price_7d_change:0, price_30d_change:0}
  ]

  topFloorMovers:VolumeStatisticModel[]=[]
  bottomFloorMovers:VolumeStatisticModel[]=[]


   data:Object=[];
   datac = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        // {
        //     label: 'First Dataset',
        //     data: [65, 59, 80, 81, 56, 55, 40]
        // },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}

  constructor(@Inject(DOCUMENT) private document: Document, private service:RestServiceService) { }

  ngOnInit(): void {
    this.service.getDataSize().subscribe(size=>{
      this.dataSize=size;
      console.log(this.dataSize);
    })

    this.sorting_field = this.sortingMap.get(this.currentMintsSortValue);
    this.sorting_order=this.orderMap.get(this.currentMintsSortValue);

    if (this.sorting_field == undefined) {
      this.sorting_field = "undef";
    }

    if (this.sorting_order == undefined) {
      this.sorting_order = "undef";
    }

    this.service.getUpcomingMints(this.sorting_field,this.sorting_order,this.currentMintsFilterBlockchain,this.limit,this.offset).subscribe(data=>{
      console.log(data)

      this.mints=data.results;
      this.offset=this.offset+this.offsetStep;
      console.log(this.mints)
    })

    this.service.getVolumeChanges("volume_24h", "desc", "Solana", 5,0).subscribe(data=>{
      console.log(data);

      this.volumes=data.results;
      this.isVolumesLoaded=true;
      console.log(this.volumes)
    },
        error => { console.log("NO CONNECTION TO BACKEND")})


    this.service.getVolumeChanges("price_24h_change","desc","Solana",3,0).subscribe(data=>{
      this.topFloorMovers=data.results;
      this.isTopFloorLoaded=true;
      console.log(this.topFloorMovers);
    })

    this.service.getVolumeChanges("price_24h_change","asc","Solana",3,0).subscribe(data=>{
      this.bottomFloorMovers=data.results;
      this.isBottomFloorLoaded=true;
      console.log(this.bottomFloorMovers);
    })
  }


  goToTwitter(mint: MintModel): void {
    window.open(mint.project_twitter_url);
  }

  goToDiscord(mint: MintModel): void {
    window.open(mint.project_discord_url);
  }




  loadVolumeChanges(sorting_field:string, sorting_order:string,blockchain:string){
    this.isVolumesLoaded=false;
    this.currentVolumesBlockchain=blockchain;
    console.log(blockchain);
    this.service.getVolumeChanges(sorting_field, sorting_order, blockchain, 5,0).subscribe(data=>{
        console.log(data);
        this.isVolumesLoaded=true;
        this.volumes=data.results;
        console.log("YES CONNECTION TO BACKEND")
      },
      error => { console.log("NO CONNECTION TO BACKEND")})
  }



  loadMints() {
    console.log("Offset: "+this.offset)
    console.log("DataSize: "+this.dataSize)
    if (this.dataSize>this.offset) {
      this.isLoading = true;

      this.sorting_field = this.sortingMap.get(this.currentMintsSortValue);
      this.sorting_order=this.orderMap.get(this.currentMintsSortValue);

      if (this.sorting_field == undefined) {
        this.sorting_field = "undef";
      }

      if (this.sorting_order == undefined) {
        this.sorting_order = "undef";
      }

      this.service.getUpcomingMints(this.sorting_field, this.sorting_order, this.currentMintsFilterBlockchain, this.limit, this.offset).subscribe(data => {
        this.isLoading = false;
        this.mints = this.mints.concat(data.results);
        console.log(this.mints)
      })
      console.log(this.sorting_field +" -------" +this.sorting_order);
    }
    console.log(this.currentMintsSortValue);
    this.offset = this.offset + this.offsetStep;
  }


  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-2) {
      console.log("End");
      this.loadMints();
    }
  }

  changeMintsSortValue() {
    this.offset=0;
    this.mints=[];
    this.loadMints();
  }

  changeMintsFilterBlockchain() {
    this.offset=0;
    this.mints=[];
    this.loadMints();
    console.log(this.currentMintsFilterBlockchain);
  }

  onVolumesSort(sorting_field: string) {
    console.log(this.isPrice24Desc);
    let order = '';
    switch (sorting_field) {
      case 'price_24h': {
        if (this.isPrice24Desc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isPrice24Desc = !this.isPrice24Desc;
        break;
      }
      case 'price_7d': {
        if (this.isPrice7DDesc) {
          order = 'asc';
        } else {
          order = 'desc'
        }
        this.isPrice7DDesc = !this.isPrice7DDesc;
        break;
      }
      case 'price_30d': {
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
}
