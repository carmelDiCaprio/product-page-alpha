import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-rhs-info',
  templateUrl: './rhs-info.component.html',
  styleUrls: ['./rhs-info.component.css']
})
export class RHSInfoComponent implements OnInit, OnChanges{

  constructor() { }
  @Input('productObj') productObj:any;
  @Input() sizeVariant:string;
  @Input() contentType:string;
  private price:number;
  private showPrice(size:string):number|void {
      // Find the index of
      if(this.productObj){
          let num = this.productObj.sizes.indexOf(size);
          this.price = this.productObj.prices[num];
      }
  }

private renderContentType = (contentType:string) => {
    if(this.productObj){
        // console.log('Selected content type', contentType);
        // console.log(this.productObj[contentType]);
    }


}

  ngOnInit() {
      this.contentType  = 'details';         // Add a default for if "contentType" is not inputted yet from  the parent component

  }


  ngOnChanges(){
      //console.log('This size change', this.sizeVariant);
      this.showPrice(this.sizeVariant);
      this.renderContentType(this.contentType);
  }


}
