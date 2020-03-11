import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

   @Input() dept:Department;
  constructor() { }
   @Input() dTitle:string;
   @Input() desc:string;
  ngOnInit(): void {
     
    
  }

}
