import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Http} from "@angular/http";


@Injectable()
export class ApiCallsService {
  public api_call:string = "http://localhost:8080/api/pallets-type";
  public supplyCall:string = "http://localhost:8080/api/supply"
  public reviewsCall:string  = "http://localhost:8080/api/reviews"


  constructor(private _http: Http) {
      this._http.get( `http://localhost:8080/api/sample`).map(res => res.json()).subscribe(console.log);
   }

  public getPallet = (type) => {
      console.log(`Pinging this route ---> ${this.api_call}/${type}`);
      return this._http.get(`${this.api_call}/${type}`)
        .map( data => data.json())
        .do( val => console.log('Current val',val))
        .map(data => {
          let fixedLinks = this.chopLinks(data.message.images);
          data.message.images = fixedLinks;
          return data;
      })
    }

/*
  public getPrices = (type ) => {
        return this._http.get(`${this.api_call}/${type}`).map(data => data.json()['prices']).catch( err => Observable.throw(err));
  }

  public getSizes = (type) => {
        return this._http.get(`${this.api_call}/${type}`).map(data => data.json()['sizes']).catch(err => Observable.throw(err));
  }
*/

// Get amount of quantity left
public getSupply = ( ) => {
    return this._http.get( `${this.supplyCall}`)
    .do(val => console.log('Supply info',val))
    .map(data => data.json());
}

// Get the current reviews for the products
public getReviews = (pType) => {
    return this._http.get(`${this.reviewsCall}/${pType}` ).map( res => res.json());
}

// Helper Functions
public chopLinks =(arr) => {
    return arr.map( (curren) => {
        return ('https:').concat(curren);
        //cBase form befoe concat ----> dn.shopify.com/s/files/1/0856/4220/products/dogfam2_110x110@2x.jpg?v=1491416984
    })
}

}
