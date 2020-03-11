import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service'

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  depts: Department[] = [];
 
  constructor(private service: DepartmentService) { }
  
  
    ngOnInit(): void {
   this.depts=this.service.staticDepartments();
   
    //  this.service.realDepartments()
    //     .subscribe(data => {
    //       this.depts = data.map(dep => {
    //         return new Department(
    //          dep.id, dep.title, dep.describe, dep.location
    //         );
    //       })
    //     });
    // this.depts.push( new Department("L&k","Upskilling,Reskilling,Skills Development,Orientation Programs","Manyata"));
    // this.depts.push( new Department("HR","Human resource team,Its Heart of an organization,Recruitment,onboarding,employee benefits,","EGL"))
    // this.depts.push( new Department("Engg","Software development,project ,support,R&D,","EGL"))
    // this.depts.push(new Department("finance","Salary process,payroll processssss","Chennai"))
  }

}
