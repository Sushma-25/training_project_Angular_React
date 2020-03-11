import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-check',
  template: `
    <p  (select)="Select()">
    {{hello}}
    <button class="btn btn-primary"(click)="findEvent($event)" (dblclick)="findEvent($event)" (mouseenter)="mouseEnter()"> Click </button>
    </p>
  
  `,
  styles: []
})
export class EventCheckComponent implements OnInit {

  hello:string="Welcome to events"
  findEvent(eventInfo){
    console.log("Clicked on button  "+eventInfo)
  }
  Select(){
    console.log("Nsvd");
  }
  mouseEnter()
  {
    console.log("Mouse entered")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
