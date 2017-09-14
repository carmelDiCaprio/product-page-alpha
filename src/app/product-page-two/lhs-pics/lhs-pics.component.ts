import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-lhs-pics',
  templateUrl: './lhs-pics.component.html',
  styleUrls: ['./lhs-pics.component.css']
})
export class LHSPicsComponent implements OnInit {

  constructor() { }
  @Input('images') images:string[];

  ngOnInit(){}



}
