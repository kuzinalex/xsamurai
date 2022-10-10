import { Component, OnInit } from '@angular/core';
import {RestServiceService} from "../service/rest-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:RestServiceService) { }

  prods:any;

  ngOnInit(): void {
    this.service.get().subscribe(data=>{
      this.prods=data
    });
    console.log(this.prods)
  }

}
