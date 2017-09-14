import { Component, OnInit, OnChanges} from '@angular/core';
import { ApiCallsService} from ".././api-calls.service";
import {Input} from "@angular/core"


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnChanges {

  constructor(private _api:ApiCallsService) { }
  public reviewInfo: {names:string[], reviews:string[]};
  @Input('palletType') pallet_type:any;


  public listenForFormChanges = () =>{
      // subscribe to service
  }
  public getReviews = (pType:string) => {
      this._api.getReviews(pType).subscribe(data => {
          console.log('Reviews data', data);
          this.reviewInfo = data;
      });
  }

  ngOnInit() {}
  ngOnChanges(){
    console.log('New product input is -->' , this.pallet_type);
    if(this.pallet_type !== null ) { this.getReviews(this.pallet_type.toLowerCase()) }
    }

}
