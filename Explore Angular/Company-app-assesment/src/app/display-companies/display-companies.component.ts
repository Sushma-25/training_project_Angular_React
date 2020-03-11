import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-companies',
  templateUrl: './display-companies.component.html',
  styleUrls: ['./display-companies.component.css']
})
export class DisplayCompaniesComponent implements OnInit {

  @Input("cDetails") company:Company;
  constructor() { 
   

  }

  ngOnInit(): void {
   
  }

}
