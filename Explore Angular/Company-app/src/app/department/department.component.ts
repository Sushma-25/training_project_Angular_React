import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Department } from '../department';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit,OnChanges {
//  @Input() title:string;
//  @Input("desc") description:string;
//  
@Input("deptdetails") dep:Department;
 originalDesc:string;
 
 constructor(private truncate:TruncatePipe)
  {  }
  ngOnChanges(changes:SimpleChanges){
console.log(changes); //it prints next and previous object data on console
  }

  ngOnInit(): void {
   this. originalDesc=this.dep.describe;
  this.dep.describe=this.truncate.transform(this.dep.describe,"10","---") ;
  console.log(this.originalDesc);
console.log(this.dep.describe);
}
  showCompleteDesc()
  {
    console.log("Trying to expand description...");
    this.dep.describe=this.originalDesc;
  }
}
