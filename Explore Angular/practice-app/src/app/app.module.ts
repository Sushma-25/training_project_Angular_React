import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportComponent } from './transport/transport.component';
import { BusComponent } from './bus/bus.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportComponent,
    BusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
