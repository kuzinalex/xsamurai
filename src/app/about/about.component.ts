import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestServiceService} from "../service/rest-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:RestServiceService, private _router: Router) { }

  twitter:any;

  prods:any;


  code:any='<blockquote class="twitter-tweet" data-cards="hidden"><p lang="tr" dir="ltr">Bu bir referandumdur. Ekonomik yıkımı yaşayan güzel ülkemizi son çıkışta kurtaracak mıyız, yoksa uçurumdan aşağı yuvarlanacak mıyız?<br>Vatanını seven sandığa gelsin! <a href="https://t.co/fiZUfy5eVp">pic.twitter.com/fiZUfy5eVp</a></p>&mdash; Kemal Kılıçdaroğlu (@kilicdarogluk) <a href="https://twitter.com/kilicdarogluk/status/1660959811586932739?ref_src=twsrc^tfw">May 23, 2023</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

  ngOnInit(): void {
    this.service.getTweet("https://twitter.com/albinsblog/status/1358691549505179648").subscribe(data=>{
      console.log(data);
    })
    
    document.getElementById("testTweet")!.innerHTML = JSON.parse(JSON.stringify(this.code));
  }

}
