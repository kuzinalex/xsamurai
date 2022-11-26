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

  sortValues:String[]=[
    "Mint Date asc",
    "Mint Date desc",
    "Supply asc",
    "Supply desc",
    "Twitter asc",
    "Twitter desc"
  ]

  filterBlockchains:String[]=[
    "SOL",
    "ETH"
  ]

  currentSortValue:String=this.sortValues[0];
  currentFilterBlockchain:String=this.filterBlockchains[0];


  mints:MintModel[]=  [
    { id: 12, blockchain: "SOL", projectName: "DeGods", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Monkey", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Cats", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "DeGods", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Monkey", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },{ id: 12, blockchain: "SOL", projectName: "DeGods", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Monkey", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },{ id: 12, blockchain: "SOL", projectName: "DeGods", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Monkey", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },{ id: 12, blockchain: "SOL", projectName: "DeGods", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
    { id: 12, blockchain: "SOL", projectName: "Monkey", twitterFollowers: 3123, projectTwitterUrl: "https//ww", projectDiscordUrl: "urldisc", mintDate: "11-10-22", mintPrice: "0.33 SOL", projectImgUrl: "thttps img", totalSupply: 5555 },
  ];

   data:Object=[];

  constructor(@Inject(DOCUMENT) private document: Document, private service:RestServiceService) { }

  ngOnInit(): void {
    this.service.get1().subscribe(data=>{
      this.data=data
      console.log(data)
    })
    console.log(this.currentSortValue);
  }

  goToUrl(): void {
    window.open('https://stackoverflow.com')
  }

  loadMints() {
    this.mints.push(this.mints[0]);
  }

  onScroll(event: any) {
    console.log(event.target.offsetHeight);
    console.log(event.target.scrollTop);
    console.log(event.target.scrollHeight);
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-2) {
      console.log("End");
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);
      this.mints.push(this.mints[0]);

    }
  }

  changeSortValue() {
    console.log(this.currentSortValue);
    this.mints=this.mints.slice(0,11);
  }

  changeFilterBlockchain() {
    console.log(this.currentFilterBlockchain);
  }
}
