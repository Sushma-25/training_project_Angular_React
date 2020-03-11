import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'department-creation',
  templateUrl: './department-creation.component.html',
  styleUrls: ['./department-creation.component.css']
})
export class DepartmentCreationComponent implements OnInit {

  dept: Department = new Department(0,"", "", "");
  dname: string;
  location: string;
  desc: string;
  constructor(private http:HttpClient,private service:DepartmentService) {
    console.log(this.dept);
  }
sendDepartment():Observable<Department>{
        console.log("sending dept object")
return this.http.post<Department>('http://localhost:8080/fetchDepartments',this.dept).pipe();


// get('http://localhost:8080/fetchDepartments').subscribe(response => console.log(response));
// console.log(this.http.get<Department[]>(deptServiceEndPoints));
//     return this.http.get<Department[]>('http://localhost:8080/fetchDepartments');

   }
   sendToService(){
     this.service.sendToWebService(this.dept);
   }
   createDepartment() : void {
    console.log("Method called : "+this.dept.title)
    this.service.createDepartment(this.dept)
  };
  
  
//  createDepartment() {
//     console.log(this.dept);
//     this.service.addToList(this.dept);
    
//   }
  ngOnInit(): void {
  }

}
