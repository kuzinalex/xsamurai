import { Component, OnInit } from '@angular/core';
import {RestServiceService} from "../service/rest-service.service";

@Component({
  selector: 'app-volumes-statistic',
  templateUrl: './volumes-statistic.component.html',
  styleUrls: ['./volumes-statistic.component.css']
})
export class VolumesStatisticComponent implements OnInit {

  constructor(private service:RestServiceService) { }

  ngOnInit(): void {
  }

}
