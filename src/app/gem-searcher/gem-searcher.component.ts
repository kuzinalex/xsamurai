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

  currentSortValue:string=this.sortValues[0];
  currentFilterBlockchain:string=this.filterBlockchains[0];

  sorting_field:string|undefined="mint_date";
  sorting_order:string|undefined="asc"

  limit:number=6;
  offset:number=0;
  offsetStep:number=6;

  dataSize:number=0;

  isLoading:boolean=false;


  mints:MintModel[]=  [
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Monkey", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1585955901831274497/nCtd2AGK_normal.jpg", total_supply: 5555 },
    { id: 12, blockchain: "SOL", project_name: "Cats", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1572754527203299328/9S_XZt-b_normal.jpg", total_supply: 5555 }
   ];

   data:Object=[];

  constructor(@Inject(DOCUMENT) private document: Document, private service:RestServiceService) { }

  ngOnInit(): void {
    this.service.getDataSize().subscribe(size=>{
      this.dataSize=size;
      console.log(this.dataSize);
    })

    this.sorting_field = this.sortingMap.get(this.currentSortValue);
    this.sorting_order=this.orderMap.get(this.currentSortValue);

    if (this.sorting_field == undefined) {
      this.sorting_field = "undef";
    }

    if (this.sorting_order == undefined) {
      this.sorting_order = "undef";
    }

    this.service.getUpcomingMints(this.sorting_field,this.sorting_order,this.currentFilterBlockchain,this.limit,this.offset).subscribe(data=>{
      console.log(data)

      this.mints=data.results;
      this.offset=this.offset+this.offsetStep;
      console.log(this.mints)
    })
  }

  // private processFilters() {
  //   let sorting_field_key = this.currentSortValue.slice(0, this.currentSortValue.length - 4).trim();
  //   this.sorting_field = this.soringMap.get(sorting_field_key);
  //
  //   this.sorting_order = this.currentSortValue.slice(this.currentSortValue.length - 4, this.currentSortValue.length).trim();
  // }

  goToTwitter(mint: MintModel): void {
    window.open(mint.project_twitter_url);
  }

  goToDiscord(mint: MintModel): void {
    window.open(mint.project_discord_url);
  }

  loadMints() {
    console.log("Offset: "+this.offset)
    console.log("DataSize: "+this.dataSize)
    if (this.dataSize>this.offset) {
      this.isLoading = true;

      this.sorting_field = this.sortingMap.get(this.currentSortValue);

      if (this.sorting_field == undefined) {
        this.sorting_field = "undef";
      }

      if (this.sorting_order == undefined) {
        this.sorting_order = "undef";
      }

      this.service.getUpcomingMints(this.sorting_field, this.sorting_order, this.currentFilterBlockchain, this.limit, this.offset).subscribe(data => {
        this.isLoading = false;
        this.mints = this.mints.concat(data.results);
        console.log(this.mints)
      })
    }
    this.offset = this.offset + this.offsetStep;
  }


  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-2) {
      console.log("End");
      this.loadMints();
    }
  }

  changeSortValue() {
    this.offset=0;
    this.mints=[];
    this.loadMints();
  }

  changeFilterBlockchain() {
    this.offset=0;
    this.mints=[];
    this.loadMints();
    console.log(this.currentFilterBlockchain);
  }
}
