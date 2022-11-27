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
    "SOL",
    "ETH"
  ]

  currentSortValue:string=this.sortValues[0];
  currentFilterBlockchain:string=this.filterBlockchains[0];

  limit:number=5;
  offset:number=0;


  mints:MintModel[]=  [
    { id: 12, blockchain: "SOL", project_name: "DeGods", twitter_followers: 3123, project_twitter_url: "https//ww", project_discord_url: "urldisc", mint_date: "11-10-22", mint_price: "0.33 SOL", project_img_url: "https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", total_supply: 5555 },
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
    // this.service.get1().subscribe(data=>{
    //   this.data=data
    //   console.log(data)
    // })
    this.service.getUpcomingMintsTest().subscribe(data=>{
      console.log(data);
    })
    console.log(this.currentSortValue);
  }

  goToUrl(): void {
    window.open('https://stackoverflow.com')
  }

  loadMints() {
    let sorting_field=this.currentSortValue.slice(0,this.currentSortValue.length-4).trim();
    let sorting_order=this.currentSortValue.slice(this.currentSortValue.length-4,this.currentSortValue.length).trim();
    console.log(this.currentSortValue);
    console.log(sorting_field);
    console.log(sorting_order);
    this.service.getUpcomingMints(sorting_field,sorting_order,this.currentFilterBlockchain,this.limit,this.offset).
    subscribe(data=>{
      this.mints=this.mints.concat(data);
      this.offset=this.offset+5;
    })
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-2) {
      console.log("End");
      this.loadMints();
      this.mints=this.mints.concat(this.mints.slice(0,this.mints.length/2));
    }
  }

  changeSortValue() {
    this.offset=0;
    this.loadMints();
    this.mints=this.mints.slice(0,11);
  }

  changeFilterBlockchain() {
    this.offset=0;
    this.loadMints();
    console.log(this.currentFilterBlockchain);
  }
}
