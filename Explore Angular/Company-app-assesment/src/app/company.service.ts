import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  cmpArray: Company[] = [];



  constructor() { }

  staticDepartments(): Company[] {
    console.log("Calling static data");
    this.cmpArray.push(new Company(1,"IBM", "The International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries."),
      new Company(2,"Cisco", "Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California, in the center of Silicon Valley. "),
      new Company(3,"HPE", "The Hewlett Packard Enterprise Company (commonly referred to as HPE) is an American multinational enterprise information technology company based in San Jose, California,[2] founded on 1 November 2015 as part of splitting of the Hewlett-Packard company.")
    );
    return this.cmpArray;
  }
}
