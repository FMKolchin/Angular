import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
//import { ServiceComponent } from './Components/service/service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortTextPipe } from './Pipes/short-text.pipe';
import { NumericValidateDirective } from './Directives/numeric-validate.directive';
import { MoreBitDitailsComponent } from './Components/more-bit-ditails/more-bit-ditails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactUsComponent,
    ServicesComponent,
    AddFeedbackComponent,
    FeedbackComponent,
    MoreDetailsComponent,
    HomeComponent,
    FeedbacksComponent,
    //ServiceComponent,
    ShortTextPipe,
    NumericValidateDirective,
    MoreBitDitailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
