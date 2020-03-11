import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { ExploreComponent } from './explore/explore.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlightdataDirective } from './highlightdata.directive';
import { FooterModule } from './footer/footer.module';
import { DepartmentCreationComponent } from './department-creation/department-creation.component';
import { CompanyRoutingModule } from './company-routing/company-routing.module';
import  {FormsModule}   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DisplayDepartmentComponent } from './display-department/display-department.component';
import { EventCheckComponent } from './event-check/event-check.component'
@NgModule({
  declarations: [
    AppComponent,
   
    CompanyComponent,
   
    DepartmentComponent,
   
    ExploreComponent,
   
    TruncatePipe,
   
    HighlightdataDirective,
   
    DepartmentCreationComponent,
   
    DisplayDepartmentComponent,
   
    EventCheckComponent
  ],
  imports: [
    BrowserModule,FooterModule,CompanyRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
