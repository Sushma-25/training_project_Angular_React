import { Component } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Company-information';
  depts:Department[]=[];
 
 
  ngOnInit(){
   this.depts.push(new Department("HR","On Boarding ","Bangalore"),
                   new Department("Engineering","nmhsdjehd","chennai"),
                   new Department("Finance","Managing finance related ","mangalore")
                  )
  }}