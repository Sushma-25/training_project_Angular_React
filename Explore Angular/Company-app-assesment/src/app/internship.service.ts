import { Injectable } from '@angular/core';
import { Internship } from './internship';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  roleList: Internship[] = []

  staticInternships(): Internship[] {
    console.log("Calling static data");
    this.roleList.push(new Internship(1, "SFD", 6, "CSE", 70000),
      new Internship(1, "SFD", 6, "CSE", 70000),
      new Internship(1, "RedHat", 6, "CoE", 70000),
      new Internship(1, "UI/UX", 6, "CSE", 70000),
    
    
      new Internship(2, "Network", 6, "CoE", 70000),
      new Internship(2, "SAN", 6, "CSE", 70000),
     new Internship(2, "AI", 6, "CoE", 70000));
    
     new Internship(3, "Developer", 6, "CoE", 70000),
     new Internship(3, "QA", 6, "CSE", 70000),
    new Internship(3, "SalesMAnager", 6, "CoE", 70000);
    
    
    
     return this.roleList;
  }
  constructor() { }
}
