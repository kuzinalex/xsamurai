import {Component, Inject, OnInit} from '@angular/core';
import {MintModel} from "../model/MintModel";
import { DOCUMENT } from '@angular/common';
import {RestServiceService} from "../service/rest-service.service";
import {empty} from "rxjs";

@Component({
  selector: 'app-gem-searcher',
  templateUrl: './gem-searcher.component.html',
  styleUrls: ['./gem-searcher.component.css']
})
export class GemSearcherComponent implements OnInit {

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
    this.service.get().subscribe(data=>{
      this.data=data
      console.log(data)
    })
  }

  goToUrl(): void {
    window.open('https://stackoverflow.com')
  }

}
