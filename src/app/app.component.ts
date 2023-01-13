import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./service/rest-service.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xProjectMain';
  loading: boolean=false;
  isMainPage:boolean=true;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        console.log('Route change detected');
        console.log(event);
      }

      if (event instanceof NavigationEnd) {
        if (event.url=="/"){
          this.isMainPage=true;
        }else {
          this.isMainPage=false;
        }
        // Hide progress spinner or progress bar
        //this.currentRoute = event.url;
        console.log(event);
        console.log(event.url);
      }
    })
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
