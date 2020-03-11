import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule} from '@angular/router'
import { CompanyComponent } from '../company/company.component';
import { DepartmentCreationComponent } from '../department-creation/department-creation.component';
import { DisplayDepartmentComponent } from '../display-department/display-department.component';
import { EventCheckComponent } from '../event-check/event-check.component';


const companyRoutes: Routes=[
  { path:"departments",component: CompanyComponent},
  { path:"create",component: DepartmentCreationComponent},
  { path:"view/:id",component: DisplayDepartmentComponent},
  { path:"events",component: EventCheckComponent},
 { path:"",redirectTo:"departments",pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(companyRoutes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
