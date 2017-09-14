import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {MiniStoreService} from ".././product-page-three/mini-store.service";


const API: { base:string } = {
    base: 'http://localhost:8080/apiTwo/products'
}
@Injectable()
export class ApiControllerTwoService {

  constructor(private _http: Http, public _miniStore:MiniStoreService) {
      //console.log('mini store service inside another service', this._miniStore);
    }


  public getProductObj = (type:string) => {
      var link = `${API.base}/${type.toLowerCase()}`;
      console.log(link);
      return this._http.get(link)
        //.do(val => console.log('Raw Response',val))
        .map( (res:Response) => res.json()['data'])
        .map( data => {
            data.images = this.fixLinks(data.images)
            return data;
        })
        .do( (val) => {
            this._miniStore.passProductInfo(val);
            return val;
        })
      
  }



  // Helper Methods
  public fixLinks = (arr:string[]) => {
        return arr.map( (curren:string) => {
            return ('https:').concat(curren);
        })
  }


}
