import { Component, OnInit, Input } from '@angular/core';
import { BusTransport } from '../bus-transport';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor() { }

  // routeNo:number=9;
  // busName:string="KSRTC";


  // @Input("routeNo") routeNo:number;
  // @Input("busName") busName:string;

  @Input("BusDetails") bus:BusTransport; 
  ngOnInit(): void {
  }

}
