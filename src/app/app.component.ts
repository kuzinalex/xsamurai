import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./service/rest-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'xProjectMain';
  prods:any;
  loading: boolean=false;

  constructor(private service:RestServiceService) {
  }



  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=false;
    },2000)
  }


}
