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

  get(){
    return this.http.get('https://dummyjson.com/products')
  }

  get1(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new Headers(headerDict),
    };

    return this.http.get('https://7530-178-127-43-217.ngrok.io/api/v1/upcoming_mints',{headers:{'Access-Control-Allow-Origin':'*'}})
  }


  getUpcomingMints(sorting_field: string, sorting_order: string, blockchain:string, limit:number, offset:number): Observable<MintModel[]>{
    const options = { params: new HttpParams()
        .set('sorting_field', sorting_field)
        .set('sorting_order', sorting_order)
        .set('blockchain', blockchain)
        .set('limit', limit)
        .set('offset', offset)
    };
    console.log(options)

     return this.http.get<MintModel[]>('https://7530-178-127-43-217.ngrok.io/api/v1/upcoming_mints',options);
  }

  getUpcomingMintsTest(): Observable<MintModel[]>{

    return this.http.get<MintModel[]>('https://72fb-178-127-43-217.ngrok.io/api/v1/upcoming_mints');
  }
}
