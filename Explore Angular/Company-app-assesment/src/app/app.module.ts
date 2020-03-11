import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCompaniesComponent } from './display-companies/display-companies.component';
import { DisplayInternshipComponent } from './display-internship/display-internship.component';
import { DisplayEligibilityComponent } from './display-eligibility/display-eligibility.component';
import { CompanyComponent } from './company/company.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCompaniesComponent,
    DisplayInternshipComponent,
    DisplayEligibilityComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
