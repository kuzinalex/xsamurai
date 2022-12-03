import {Component, Inject, OnInit} from '@angular/core';
import {MintModel} from "../model/MintModel";
import { DOCUMENT } from '@angular/common';
import {RestServiceService} from "../service/rest-service.service";

@Component({
  selector: 'app-gem-searcher',
  templateUrl: './gem-searcher.component.html',
  styleUrls: ['./gem-searcher.component.css']
})
export class GemSearcherComponent implements OnInit {

  sortValues:string[]=[
    "Mint Date asc",
    "Mint Date desc",
    "Supply asc",
    "Supply desc",
    "Twitter asc",
    "Twitter desc"
  ]

  filterBlockchains:string[]=[
    "Solana",
    "Ethereum"
  ]

  currentSortValue:string=this.sortValues[0];
  currentFilterBlockchain:string=this.filterBlockchains[0];

  limit:number=6;
  offset:number=0;
  offsetStep:number=6;
  dataSize:number=0;
  isLoading:boolean=false;


  mints:MintModel[]=  [
  //   { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
  //   { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 }
   ];

   data:Object=[];

  constructor(@Inject(DOCUMENT) private document: Document, private service:RestServiceService) { }

  ngOnInit(): void {
    this.service.getDataSize().subscribe(size=>{
      this.dataSize=size;
      console.log(this.dataSize);
    })

    this.service.getUpcomingMints("null","null",this.currentFilterBlockchain,this.limit,this.offset).subscribe(data=>{
      this.mints=data;
      this.offset=this.offset+this.offsetStep;
    })
  }

  goToUrl(): void {
    window.open('https://stackoverflow.com')
  }

  loadMints() {
    console.log("Offset: "+this.offset)
    console.log("DataSize: "+this.dataSize)
    if (this.dataSize>this.offset) {
      this.isLoading = true;
      let sorting_field = this.currentSortValue.slice(0, this.currentSortValue.length - 4).trim();
      let sorting_order = this.currentSortValue.slice(this.currentSortValue.length - 4, this.currentSortValue.length).trim();
      this.service.getUpcomingMints(sorting_field, sorting_order, this.currentFilterBlockchain, this.limit, this.offset).subscribe(data => {
        this.isLoading = false;
        this.mints = this.mints.concat(data);
      })
    }
    this.offset = this.offset + this.offsetStep;
  }

  loadMintsTest(){
    this.isLoading=true;
    console.log("loadMintsTest CALLED");
    this.service.getUpcomingMintsTest().subscribe(data=>{
      this.mints=this.mints.concat(data);
      this.isLoading=false;
      console.log("loadMintsTest DATA FETCH");
    })
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-2) {
      console.log("End");
      // this.loadMintsTest();
      this.loadMints();
    }
  }

  changeSortValue() {
    this.offset=0;
    //this.loadMintsTest();
    this.mints=this.mints.slice(0,11);
  }

  changeFilterBlockchain() {
    this.offset=0;
    this.mints=[];
    this.loadMints();
    console.log(this.currentFilterBlockchain);
  }
}
