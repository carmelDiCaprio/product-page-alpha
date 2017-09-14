import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianQuestionComponent } from './accordian-question.component';

describe('AccordianQuestionComponent', () => {
  let component: AccordianQuestionComponent;
  let fixture: ComponentFixture<AccordianQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
