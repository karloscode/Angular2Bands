import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent }  from './app.component';
import { BandsComponent }  from './components/bands.component';
import { UnderConstruccionComponent }  from './components/under-construccion.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';


 
@NgModule({
  imports:      [ BrowserModule, routing, YoutubePlayerModule ],
  declarations: [ AppComponent, BandsComponent, UnderConstruccionComponent  ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
