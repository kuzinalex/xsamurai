import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./service/rest-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xProjectMain';
  prods:any;

  constructor(private service:RestServiceService) {
  }


  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }


}
