import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MintModel} from "../model/MintModel";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }


  getUpcomingMints(sorting_field: string, blockchain:string, limit:number, offset:number): Observable<MintModel[]>{
    const options = { params: new HttpParams()
        .set('sorting', sorting_field)
        //.set('sorting_order', sorting_order)
        .set('blockchain', blockchain)
        .set('limit', limit)
        .set('offset', offset)
    };
    console.log(options)

     return this.http.get<MintModel[]>('https://91a4-178-127-119-79.ngrok.io/api/v1/upcoming_mints',options);
  }

  getDataSize():Observable<any>{
    return this.http.get("https://91a4-178-127-119-79.ngrok.io/api/v1/upcoming_mints/mint_model_size");
  }
}
