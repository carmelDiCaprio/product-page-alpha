import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RHSFormComponent } from './rhs-form.component';

describe('RHSFormComponent', () => {
  let component: RHSFormComponent;
  let fixture: ComponentFixture<RHSFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RHSFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RHSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
