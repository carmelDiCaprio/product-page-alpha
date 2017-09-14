import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {ProductPageComponent} from "./product-page/product-page.component";
import {ApiCallsService} from "./api-calls.service";
import {ApiControllerTwoService} from "./product-page-two/api-controller-two.service";
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductPageDosComponent } from './product-page-two/product-page-dos/product-page-dos.component';
import { ProductPageTresComponent } from "./product-page-three/product-page-tres/product-page-tres.component";
import {MiniStoreService} from "./product-page-three/mini-store.service";

import { LHSPicsComponent } from './product-page-two/lhs-pics/lhs-pics.component';
import { RHSInfoComponent } from './product-page-two/rhs-info/rhs-info.component';
import { RHSFormComponent } from './product-page-two/rhs-form/rhs-form.component';
import { AccordianQuestionComponent } from './product-page-three/accordian-question/accordian-question.component';

const palletTypes:Object = { pet: 'pet', kids: 'kids', family:'family', vacation: 'vacation', wedding:'wedding'};
const app_routes = [
    {path: 'product-page', component: ProductPageComponent, data:palletTypes },
    {path: 'product-page2', component: ProductPageDosComponent },
    {path: 'product-page3', component:  ProductPageTresComponent }
  ]


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ReviewsComponent,
    ProductPageDosComponent,
    LHSPicsComponent,
    RHSInfoComponent,
    RHSFormComponent,
    ProductPageTresComponent,
    AccordianQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(app_routes),
    ReactiveFormsModule
  ],
  providers: [ApiCallsService, ApiControllerTwoService, MiniStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
