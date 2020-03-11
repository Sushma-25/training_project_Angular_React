import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../company/company.component';
import { DisplayInternshipComponent } from '../display-internship/display-internship.component';




const appRoutes: Routes=[
  { path:"view/:id",component: DisplayInternshipComponent},
  {path:"companies",component:CompanyComponent},
  { path:"",redirectTo:"companies",pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
 
  ],
  exports: [
    RouterModule
  ]
  
})
export class RoutingModule { 

  
}
