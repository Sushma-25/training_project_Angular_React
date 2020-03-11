import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {
  deptId: number;
  dpart: Department;
  allDepartments: Department[] = [];
  //Activatedroutes injects path variable
  constructor(private actRoutes: ActivatedRoute, private service: DepartmentService) {
    // this.allDepartments=this.service.staticDepartments();

    this.actRoutes.params.subscribe(params => {
      this.deptId = params.id;
    });
    console.log(this.service.realDepartments()
      .subscribe(data => {
        this.allDepartments = data.map(dpart => {
          return new Department(
            dpart.id, dpart.title, dpart.describe, dpart.location
          );
        })
      }));
  }

  ngOnInit(): void {
    this.dpart = this.allDepartments[this.deptId - 1];

  }

}
