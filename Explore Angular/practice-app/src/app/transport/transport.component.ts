import { Component, OnInit } from '@angular/core';
import { BusTransport } from '../bus-transport';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {


 buses:BusTransport[]=[];


  constructor() { }

  ngOnInit(): void {
 this. buses.push(new BusTransport(1,"KSRTC","ಸವಲತ್ತನ್ನು ಬಳಕೆ ಮಾಡುತ್ತದೆ. ಇದನ್ನು ಚಾಲನೆ ಮಾಡಲು Ctrl+M ಒತ್ತಿ (Ctrl ಕೀ ಜೊತೆ M ಕೀಲಿಯನ್ನು ಒತ್ತಿ). search ಬಟನ್ ಮೇಲೆ ಮೊದಲ ಬಾರಿ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಕೀಲಿಮಣೆ ಐಕಾನ್ ಮೂಡಿಬರುತ್ತದೆ WMF-Agora-Input settings-000000.svg. ಅದರ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಕನ್ನಡ "));
 this.buses.push(new BusTransport(2,"VRL","VRL Logistics Limited (formerly Vijayanand Roadlines Ltd.),[5] commonly known as the VRL Group, is an Indian conglomerate headquartered in Hubballi, Karnataka, India with operations in around 23 states and 4 union territories in the country. Business operations of VRL Group include road transportation, logistics, publishing etc VRL Group "));
  this.buses.push(new BusTransport(3,"SRS Travels","jzhfdius kxjhfdiu cskjehfskhsfiu"));
  }

}
