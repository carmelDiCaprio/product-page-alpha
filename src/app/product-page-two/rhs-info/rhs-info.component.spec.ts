import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RHSInfoComponent } from './rhs-info.component';

describe('RHSInfoComponent', () => {
  let component: RHSInfoComponent;
  let fixture: ComponentFixture<RHSInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RHSInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RHSInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
