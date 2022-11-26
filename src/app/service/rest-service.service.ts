import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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


  // getMints(sortValue: String, blockchain:String, limit:number, offset:number){
  //    return this.http.get()
  // }
}
