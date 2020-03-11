import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { InternshipService } from '../internship.service';
import { Internship } from '../internship';

@Component({
  selector: 'app-display-internship',
  templateUrl: './display-internship.component.html',
  styleUrls: ['./display-internship.component.css']
})
export class DisplayInternshipComponent implements OnInit {

 id: number;
 
  internshiplist: Internship[] = [];
  filteredlist:Internship[]=[];
  constructor(private actRoutes: ActivatedRoute, private service:InternshipService ) {
      this.actRoutes.params.subscribe(params => {
      this.id= params.id;
    });
    console.log(this.id);
    this.internshiplist=service.staticInternships()
    var i;
    for (i = 0; i < this.internshiplist.length; i++) {
      if(this.internshiplist[i].cid==this.id)
         this.filteredlist.push(this.internshiplist[i])
    }
   }

  ngOnInit(): void {
  }

}
