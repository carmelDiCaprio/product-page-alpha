import { Component, OnInit, Input, OnChanges , Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-rhs-form',
  templateUrl: './rhs-form.component.html',
  styleUrls: ['./rhs-form.component.css']
})
export class RHSFormComponent implements OnInit,OnChanges,AfterViewInit,AfterContentInit {

  constructor() { }
  @Input() productObj:any;
  @Input() form:FormGroup;
  @Input() palletOptions:string[];
  public sizes:string[];
  public prices: number[] | string[];
  public quantLeft: number | string ;
  public userPhoto:any|File;
  @Output() pTypeListener:EventEmitter<string> = new EventEmitter();
  @Output() sizeListener:EventEmitter<any>  = new EventEmitter();



  public submitForm = (form:FormGroup ) => {
     console.log(form.value);
  }

  private editMembers = (serverDatar:any ) => {
      //console.log('server datar to edit some class properties/members with', serverDatar);
      if(serverDatar){
        this.sizes = serverDatar.sizes;
        this.prices = serverDatar.prices;
        this.quantLeft = serverDatar.quantity;
      // console.log('Edit members', this.sizes, this.prices , this.quantLeft);
      }
  }

public photoChange = (rawData:any, event:any) => {
    // Clear any old files
    let target = event.target.files[0];
    //console.log(target);
    let reader = new FileReader();
    reader.onloadend = () =>{
        this.userPhoto = reader.result
        this.form.controls.photo.patchValue( reader.result );
    }
    reader.readAsDataURL(target);

}

  public makeListeners = () => {
    if(this.form){
      this.form.controls.type.valueChanges.do( () => console.log('attempt pallet type change'))
        .subscribe( data =>{
              let size = this.form.controls.size.value;      // Grab current size value and send along with the new "pallet type" selected
              // console.log('Current Size form form', size);
              this.pTypeListener.emit(JSON.stringify({type:data, size:size}));
              // Also change the query string associated with the pallet type
              })
            }
      // Change query string
      if(this.form){
          this.form.controls.type.valueChanges
          //.take(1)
          .last().subscribe( val => {
          console.log('last value of the type change', val);
      });
    }

      // Make listener for changes in size
    if(this.form){
      this.form.controls.size.valueChanges.do( () =>{} )
        .subscribe( val  => {
            this.sizeListener.emit(val);
        })
      }
}

 public editQueryString = () => {

    if(this.form){
        this.form.controls.type.valueChanges.take(1).subscribe( val => {
              
      })

    }
  }


  ngOnInit() {

  }

  ngAfterViewInit(){
      this.makeListeners();

  }
  ngAfterContentInit(){

  }

  ngOnChanges(){
      //console.log(this.form);
      //console.log(this.productObj);
      this.editMembers(this.productObj);
      this.makeListeners();
      this.editQueryString();


  }

}
