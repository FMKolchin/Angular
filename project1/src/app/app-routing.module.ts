import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { HomeComponent } from './Components/home/home.component';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { MoreBitDitailsComponent } from './Components/more-bit-ditails/more-bit-ditails.component';

const routes: Routes = [{path:"home",component:HomeComponent },
{path:"",component:HomeComponent},
{path:"contact",component:ContactUsComponent},
{path:"feedbacks",component:FeedbacksComponent},
{path:"services",component:ServicesComponent,children:[
  {path:"more_bit_ditails/:service",component:MoreBitDitailsComponent}
]},
{path:"add-feedback",component:AddFeedbackComponent},
{path:"more-details/:service",component:MoreDetailsComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
