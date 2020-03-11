import { Injectable } from '@angular/core';
import { Department } from './department';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  deptArray: Department[] = [];
  
 
  addToList(dept: Department) {
    
    this.deptArray.push(dept);
    console.log("Department is added to list" + this.deptArray);
  }
  constructor(private http:HttpClient){

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }; 

  sendToWebService(department: Department) {
    console.log("Sendig title to service as path variable")
    return this.http.post('http://localhost:8080/getDepartments/'+department.title, null).subscribe(response => console.log(response));
  } 

  
  
  public createDepartment(department) {
    console.log('object passed : '+department);
    console.log("Passing object to service");
    this.http.post<Department>('http://localhost:8080/addDepartment', department,{responseType:'text' as 'json'}).subscribe(response => {console.log('response from micro');
  });
    //return this.http.post<Department>(this.url, null);
    
  }
    realDepartments():Observable<Department[]>{
             console.log("calling real data")
   this.http.get('http://localhost:8080/fetchDepartments').subscribe(response => console.log(response));
  //console.log(this.http.get<Department[]>(deptServiceEndPoints));
      return this.http.get<Department[]>('http://localhost:8080/fetchDepartments');

      }

  staticDepartments(): Department[] {
    console.log("Calling static data");
    this.deptArray.push(new Department(1, "L&k", "Upskilling,Reskilling,Skills Development,Orientation Programs", "Manyata"));
    this.deptArray.push(new Department(2, "HR", "Human resource team,Its Heart of an organization,Recruitment,onboarding,employee benefits,", "EGL"))
    this.deptArray.push(new Department(3, "Engg", "Software development,project ,support,R&D,", "EGL"))
    this.deptArray.push(new Department(4, "finance", "Salary process,payroll processssss", "Chennai"))

    return this.deptArray;
  }
}
