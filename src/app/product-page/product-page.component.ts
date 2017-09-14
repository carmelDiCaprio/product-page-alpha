import { Component, OnInit } from '@angular/core';
import {ProductMeta , ProductMetaTwo} from "./models";
import {sizeOptions, showSizeModal, palletTypeOptions} from "./formOptions";
import {FormControl, FormGroup, FormBuilder,FormArray, Validators } from "@angular/forms";
import {ApiCallsService} from ".././api-calls.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public categoryImages:any[] = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight'];
  public productMeta:ProductMeta|ProductMetaTwo|any;
  public palletOptions:any[] =[];
  public palletSizes:any[] = [];
  public productForm:FormGroup;
  public displayUpload:any;
  public selectedPalletSize: any;
  public showProductDetails:boolean = true;     // Defaultc condition is to show the product details
  public standard:Object = { height:'100px', width:'100px' } ;
  // Observables
  public palletChoice$:any;
  public supplyInfo$:Observable<string>;


  constructor(private _api:ApiCallsService ) { }

// Need to edit with server call data
  private makeDefault = () => {
    const initDefaultPallet = {name: 'Any Occassian Pallet', details: 'These are your pallet details', price: 250.00};
    this.productMeta = new ProductMeta(initDefaultPallet);
    this.palletOptions = palletTypeOptions;
    this.palletSizes = sizeOptions;
    //return console.log('Default product for start',this.productMeta);
  }
  private onSubmit(form:FormGroup) {
      console.log('Submitting the product form', form);
  }

  public changeImage = (current, replacement) => {
        current.src = replacement;
  }

  public listenChanges = () =>{
    const form = this.productForm;
    this.productForm.valueChanges.subscribe( data => {
        console.log('value change to product form', data);
        // Send changed form to the service "controller"
    })
    function changePrice(id:number){
        //console.log(id);
        form.controls['price'].patchValue(sizeOptions[id].price);
        //console.log(form.value);
      }
    function editQuery(pType:string){
        console.log(history);
      if(window.location.href.indexOf('type') !== -1){
          // history.back();
          history.replaceState({},null, `/product-page/?type=${pType}` )   // Doesnt work the way i need it too
        } else {
            history.pushState({},null, `${window.location.href}?type=${pType}` )   // Doesnt work the way i need it too
        }
    }
    form.controls['size'].valueChanges.subscribe( changePrice, console.error );
    form.controls['size'].valueChanges.subscribe( ()=> this.getSupplyInfo(), console.error );
    // Listening for changes to the pallet type
    form.controls['type'].valueChanges.subscribe(data => this.apiCall( data.toLowerCase() ), console.error);
    form.controls['type'].valueChanges.subscribe(data => editQuery(data), console.error);


  }

  public photoChange = (field:any, ev:any ) => {
    //console.log('filed event', field);
    // console.log('Change event', ev);
    if(!ev.target.files[0]){
      console.log('No file selected');
      this.displayUpload="";       // Clear this field in case its already full
      this.productForm.controls['photo'].patchValue('');
    }
    let targ = ev.target.files[0];
    console.log(field.files);
    var reader = new FileReader();
    reader.onloadend = () => {
        //console.log(reader.result);
        this.displayUpload = reader.result;
        // Patch Value on the Reactive Form
        this.productForm.controls['photo'].patchValue(reader.result) ;
       };
       reader.readAsDataURL(targ);
}

  // Calls  to the APi  -------------------------------------------------------
  public apiCall = (pType:string) => {
      this.palletChoice$ = this._api.getPallet(pType).do(() => this.getSupplyInfo()).map(data => data.message)

  }

  public getSupplyInfo = () => {
      this.supplyInfo$ = this._api.getSupply();
      //console.log('Current Supply Info', this.supplyInfo$);
  }


  ngOnInit() {
        //console.log('Activated Route', this.ac_route);
        // Default init product
        this.makeDefault();
        this.productForm = new FormGroup({
                type: new FormControl( ),
                size: new FormControl( ),
                picReady: new FormControl(''),      // default value of empty string
                photo: new FormControl( ),
                price: new FormControl()
              })
      this.listenChanges();
      this.apiCall('generic');




  }

}


/* Logic for Dynamic information
1) At page load pull in a a default product page infomration from the server


*/
