import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";


@Injectable()
export class MiniStoreService {

  constructor() { }

  public productSubj:Subject<any> = new Subject<any>();
   public productObs:Observable<any> = this.productSubj.asObservable();

  public passProductInfo = (productObj) => {
      // console.log('Passed from the api call service to the mini store', productObj);
       this.productSubj.next(productObj)
  }



}
