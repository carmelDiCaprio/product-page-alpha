import { Injectable } from '@angular/core';
import { Subject , Observable } from "rxjs";
import {FormGroup} from "@angular/forms";


@Injectable()
export class ControllerService {

  private productFormSource:Subject<any> = new Subject<any>();
  private productFormObs:Observable<any> = this.productFormSource.asObservable();

  constructor() { }

  public passPalletInfo = (pallet_type ) =>{
  } 



}
