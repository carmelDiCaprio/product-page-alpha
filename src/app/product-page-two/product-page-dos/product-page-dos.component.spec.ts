import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageDosComponent } from './product-page-dos.component';

describe('ProductPageDosComponent', () => {
  let component: ProductPageDosComponent;
  let fixture: ComponentFixture<ProductPageDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
