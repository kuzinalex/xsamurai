import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MintModel} from "../model/MintModel";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MintsResponseModel} from "../model/MintsResponseModel";

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  public static API_PROTOCOL='https://';

  public static API_ADDRESS='8eef-178-127-79-27.ngrok.io';

  public static API_VERSION='/api/v1';

  public static UPCOMING_MINTS='/upcoming_mints'

  public static MINT_MODEL_SIZE='/mint_model_size'




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
}
