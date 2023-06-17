import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MintModel} from "../model/MintModel";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MintsResponseModel} from "../model/MintsResponseModel";
import {VolumeStatisticModel} from "../model/VolumeStatisticModel";
import {VolumeStatisticResponseModel} from "../model/VolumeStatisticResponseModel";
import { ChartModel } from '../model/ChartModel';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  public static SEPARATOR='/';

  public static API_PROTOCOL='https://';

  public static API_ADDRESS='70a9-178-127-90-91.ngrok-free.app/';

  public static API_VERSION='/api/v1';

  public static UPCOMING_MINTS='/upcoming_mints'

  public static MINT_MODEL_SIZE='/mint_model_size'

  public static VOLUMES_CHANGES='/popular_collections'




  constructor(private http: HttpClient) { }


  getUpcomingMints(sorting_field: string, sorting_order:string, blockchain:string, limit:number, offset:number): Observable<MintsResponseModel>{
    const options = { params: new HttpParams()
        .set('sorting_field', sorting_field)
        .set('sorting_order', sorting_order)
        .set('blockchain', blockchain)
        .set('limit', limit)
        .set('offset', offset)
    };
    console.log(limit)
    console.log(offset)


    return this.http.get<MintsResponseModel>(
      RestServiceService.API_PROTOCOL
      +RestServiceService.API_ADDRESS
      +RestServiceService.API_VERSION
      +RestServiceService.UPCOMING_MINTS
      ,options);
  }

  getDataSize():Observable<any>{


    return this.http.get(
      RestServiceService.API_PROTOCOL
      +RestServiceService.API_ADDRESS
      +RestServiceService.API_VERSION
      +RestServiceService.UPCOMING_MINTS
      +RestServiceService.MINT_MODEL_SIZE
    );
  }

  getVolumeChanges(sorting_field: string, sorting_order:string, blockchain:string, limit:number, offset:number): Observable<VolumeStatisticResponseModel>{
    const options = { params: new HttpParams()
        .set('sorting_field', sorting_field)
        .set('sorting_order', sorting_order)
        .set('blockchain', blockchain)
        .set('limit', limit)
        .set('offset', offset)
    };

    return this.http.get<VolumeStatisticResponseModel>(
      RestServiceService.API_PROTOCOL
      +RestServiceService.API_ADDRESS
      +RestServiceService.API_VERSION
      +RestServiceService.VOLUMES_CHANGES
      ,options);
  }


  getCollectionDetail(collection_symbol:string): Observable<VolumeStatisticModel>{
    return this.http.get<VolumeStatisticModel>(
      RestServiceService.API_PROTOCOL
      +RestServiceService.API_ADDRESS
      +RestServiceService.API_VERSION
      +RestServiceService.VOLUMES_CHANGES
      +RestServiceService.SEPARATOR
      +collection_symbol);
  }

  getCollectionChart(collection_symbol:string, chart:string): Observable<ChartModel>{
    return this.http.get<ChartModel>(
      RestServiceService.API_PROTOCOL
      +RestServiceService.API_ADDRESS
      +RestServiceService.API_VERSION
      +RestServiceService.VOLUMES_CHANGES
      +RestServiceService.SEPARATOR
      +collection_symbol
      +RestServiceService.SEPARATOR
      +chart);
  }

  getTweet(url:string): Observable<any>{
    return this.http.get<any>("https://publish.twitter.com/oembed?url="
    +url);
  }
}
