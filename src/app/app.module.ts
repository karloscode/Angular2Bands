import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { BandsComponent }  from './components/bands.component';
import { UnderConstruccionComponent }  from './components/under-construccion.component';
 
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, BandsComponent, UnderConstruccionComponent  ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
