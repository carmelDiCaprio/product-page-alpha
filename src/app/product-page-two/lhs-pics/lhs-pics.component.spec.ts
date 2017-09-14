import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LHSPicsComponent } from './lhs-pics.component';

describe('LHSPicsComponent', () => {
  let component: LHSPicsComponent;
  let fixture: ComponentFixture<LHSPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LHSPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LHSPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
