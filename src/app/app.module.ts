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
import { FollowersPipe } from './pipes/followers.pipe';
import { PricePipe } from './pipes/price.pipe';
import {ChartModule} from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';


const appRoutes: Routes=[
  {path:'', component:MainComponent},
  {path:'about', component:AboutComponent},
  {path:'searcher', component:GemSearcherComponent},
  {path:'volumes', component:VolumesStatisticComponent},
  {path:'collections/:id', component:CollectionDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    GemSearcherComponent,
    VolumesStatisticComponent,
    FollowersPipe,
    PricePipe,
    CollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    SkeletonModule,
    PanelModule,
    FieldsetModule,
    TableModule,
    TabViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
