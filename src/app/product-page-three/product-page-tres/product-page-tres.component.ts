import { Component, OnInit } from '@angular/core';
import { MiniStoreService } from ".././mini-store.service";
import {ApiControllerTwoService} from "../.././product-page-two/api-controller-two.service";
import {Http, Headers, Response} from "@angular/http";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Component({
  selector: 'app-product-page-tres',
  templateUrl: './product-page-tres.component.html',
  styleUrls: ['./product-page-tres.component.css']
})
export class ProductPageTresComponent implements OnInit {

  public storeProduct:any;
  constructor(private _miniStore: MiniStoreService, private _apiCall:ApiControllerTwoService, private _http:Http, private _fb:FormBuilder, private _router:Router, private _ac:ActivatedRoute) { }
  public palletType:string;
  public palletTypeArr:Array<string> = ['Generic', 'Family', 'Pet'];
  public sizesArr:Array<string>;
  public pricesArr:Array<number>;
  public videoLinksArr:Array<{vid:string, link:string}> = [{vid:'jazz', link: 'https://www.youtube.com/embed/WHryvQQu9LU'} , {vid:'techo', link: 'https://www.youtube.com/embed/WHryvQQu9LU'} , {vid:'house' , link:"https://www.youtube.com/embed/4RRkoCfoIDU"} ];
  public index:number;
  public selectedInfo:{size:string, type:string , price:number , display:string } ;

  // Form Properties
  public picReady:string;       // Starts off as null
  //public changePalletType:FormControl = new FormControl();\
  public radioFormControl:FormControl;
  public fileInputFormControl: FormControl;

  public subjListener = () => {
        /*this._miniStore.productObs.subscribe( data => {
            console.log('Product passed from store', data);
        })
        */
  }

  public getData = (options?:ApiOptions) => {
      let query:string   = 'http://localhost:8080/apiTwo/products';
      this._http.get(`${query}/${ options.pallet_type.toLowerCase() }`).do(val => console.log('raw',val))
        .map( (res:Response) => res.json().data )
        .map( data =>{
            // console.log('json data', data);
            data.images.forEach( curren => { return ('https').concat(curren) } )
            return data;
        })
        .subscribe( val  => {
            // console.log('val from server ', val);
            return this.editMembers(val, options);
        })
  }

  public editMembers = (data:ServerProduct, options?:ApiOptions) => {
      this.storeProduct = data;
      this.sizesArr = data.sizes;
      this.pricesArr = data.prices;
      this.index = data.sizes.indexOf(options.size_type);
      this.selectedInfo = Object.assign({}, this.selectedInfo , {size: this.sizesArr[this.index] , type:data.name , price: this.pricesArr[this.index] , display:'summary' });
      console.log('All edited memebers', [ this.sizesArr, this.pricesArr, this.index, this.selectedInfo ]);
  }


  public testStuff = () => {
      let apiOptionsOne = new ApiOptions({});
      let apiOptionsTwo = new ApiOptions({pallet_type:'Pet', size_type: 'Large'});
      //console.log('empty options', apiOptionsOne);
      //console.log('full options', apiOptionsTwo);
      this.buildForm();
  }

  public logPalletChange = (ev) => {
      console.log('Change to pallet type', ev.target.value);
      // Make API Call
      this.getData(  new ApiOptions({pallet_type:ev.target.value , pallet_size: this.selectedInfo.size}) );
      this._router.navigate(['/product-page3'] , {queryParams: {type:ev.target.value}})
}
  public logSizeChange = (ev) => {
      // console.log('Change to the size of the pallet',ev.target.value);
        this.selectedInfo['size'] = ev.target.value;
        this.index = this.sizesArr.indexOf(ev.target.value)
        this.selectedInfo['price'] = this.pricesArr[this.index];
        console.log('NEw selected info', this.selectedInfo);
  }
  public togglePills = (pill:string) => {
      this.selectedInfo  = Object.assign({} , this.selectedInfo , {display:pill })
  }
  public logPicChange = (ev) => {
      console.log('Pic change' , ev.target.files[0]);

  }


// We dont need to build a form since doing all of the changes to the View via Event Listeners, but if we did want to build a form , this is how we would do it
public buildForm = (options?) => {
      // Test a sample form
    let fOneClass = new FormTres();
    //console.log(fOneClass);
    let fOne = this._fb.group(fOneClass);
    //console.log('Values',fOne.value )
    // console.log('Controls', fOne.controls);

    }

  ngOnInit() {
    //console.log(this._miniStore);
    //this.subjListener();
    // console.log(this._apiCall);
    this.getData(new ApiOptions({}));
    this.testStuff();
    // console.log('Enum created', Content);
    // Build Form
    this.radioFormControl = new FormControl();
    this.fileInputFormControl = new FormControl();
    console.log(this.radioFormControl);
    console.log(this.fileInputFormControl);
    // Router
    console.log(this._router);
    console.log('Activated route', this._ac);

  }

}


// Custom Interfaces and Helper Classes
export class ApiOptions{
  public pallet_type:string = 'Generic';     // Default values
  public size_type:string = 'Standard';      // Default values
  constructor( options ){
      return Object.assign({}, this, options);
  }
}

export interface ServerProduct{
    name:string;
    images:string[];
    prices: number[];
    sizes:string[];
    reviews:any;
    details:any;
    mainPoints:any;
}

export class FormTres {
    constructor(public pallet_type:string = 'Generic', public size_type:string = 'Standard',
    public price:number = 129.00 , public picReady:boolean = true , public photoLink:string = undefined){

    }
}
