import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { GemSearcherComponent } from './gem-searcher/gem-searcher.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { VolumesStatisticComponent } from './volumes-statistic/volumes-statistic.component';

const appRoutes: Routes=[
  {path:'', component:MainComponent},
  {path:'about', component:AboutComponent},
  {path:'searcher', component:GemSearcherComponent},
  {path:'volumes', component:VolumesStatisticComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    GemSearcherComponent,
    VolumesStatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
