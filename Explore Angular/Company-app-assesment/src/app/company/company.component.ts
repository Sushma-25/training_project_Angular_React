import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  clist:Company[]=[];


  constructor(public service:CompanyService) { }

  ngOnInit(): void {
    this.clist=this.service.staticDepartments();
    console.log(this.clist);
  }

}
