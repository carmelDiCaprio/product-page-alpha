import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian-question.component.html',
  styleUrls: ['./accordian-question.component.css']
})
export class AccordianQuestionComponent implements OnInit {

  constructor() { }
  @Input() control:string;

  ngOnInit() {
      console.log('Step',this.control); 
  }

}
