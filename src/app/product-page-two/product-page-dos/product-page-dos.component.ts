import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {ApiControllerTwoService} from ".././api-controller-two.service";
import {Router} from "@angular/router";




@Component({
  selector: 'app-product-page-dos',
  templateUrl: './product-page-dos.component.html',
  styleUrls: ['./product-page-dos.component.css']
})
export class ProductPageDosComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _apiTwo:ApiControllerTwoService, private _router:Router) { }
  public formOne:FormGroup;
  public formTwo:FormGroup;
  public palletOptions:string[] = [ 'Generic', 'Family','Pet'];
  public productSelect$:Observable<any>;              // Observable Version
  public productSelect:Object;                         // Non Observable version
  public sizeVariant:string = 'Standard';                           // Holds the current size. Default value
  public contentType:string = 'summary' ;            // Default initial value. Contaons the current content ype --> summary  reviews, or main points


  // Build form that happends without depending on any http requests to the server
  public buildFormOne = () =>{
      this.formOne = this._fb.group({
          type: ['Generic', Validators.required],
          size: ['Standard',Validators.required],
          pictureReady: [undefined, Validators.required],
          photo: [undefined]

      })
      // console.log('Form one', this.formOne.value);
  }

  // Build form method that depends on http request to the server
  public buildFormTwo = (serverData:any, options?:any) =>{
        // should defintly make an interface for that server data coming across the wire
        const product = serverData;
        //console.log('Product from the server initial', serverData);
        this.formTwo = this._fb.group({
            type: [product.type, Validators.required],
            size: [ (options ? options.size : undefined ), Validators.required ],
            // size: [ undefined , Validators.required],
            pictureReady: [ undefined,Validators.required],
            photo: [ undefined]
        });
        //console.log('Form two', this.formTwo.value);
  }



  public apiCall = (pType:string, options?:formOptions) => {
      // Make an api call using the second api service
        let apiObs$ = this._apiTwo.getProductObj(pType);
        this.productSelect$ = apiObs$;
        apiObs$.subscribe( data => {
            //console.log(data);
            this.productSelect = data;

            // Build a form with the data from the server
            if(!options){
                // Build generic form
                // console.log('no extra options passed');
                this.buildFormTwo(data);
              } else if(options){
                  // console.log('Extra options object passed', options);
                  // build form with pallet type updates and size updates
                   this.buildFormTwo(data,options);
                  // console.log(this.formTwo.value);
                  this._router.navigate(['/product-page2'] , {queryParams: {type: data.name }})
            }
          }) ;

  }

  public catchPalletChange = (jsonData) => {
      // Method will be used dually, with Pallet Type Changes
      // Make a new api call for new data for a new or updated form
        let { type , size } = JSON.parse(jsonData) ;
        //console.log('Options data passed from the form component', { type , size });
        return this.apiCall(type , {size} );
  }

  public catchSizeChange = (ev:any ) => {
      //console.log('New size change', ev );
      this.sizeVariant = ev;
  }




  ngOnInit() {
        // Query API for generic info
         //console.log('Need to set up the generic query');
         this.apiCall('Generic', {size:'Standard'} );
         this.buildFormOne();
       }

}

interface formOptions {
    size?:string;
}
