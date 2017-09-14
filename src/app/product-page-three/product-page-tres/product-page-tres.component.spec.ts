import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageTresComponent } from './product-page-tres.component';

describe('ProductPageTresComponent', () => {
  let component: ProductPageTresComponent;
  let fixture: ComponentFixture<ProductPageTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
