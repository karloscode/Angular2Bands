import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { MetadataModule, MetadataLoader, MetadataStaticLoader, PageTitlePositioning } from 'ng2-metadata';


import { AppComponent }  from './app.component';
import { BandsComponent }  from './components/bands.component';
import { UnderConstruccionComponent }  from './components/under-construccion.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

export function metadataFactory() {
  return new MetadataStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'School Of Rock',
    defaults: {
      title: 'Angular Rocks',
      description: 'Esto es la descripción por defecto',
      keywords: 'angular rocks default'
    }
  });
}
 
@NgModule({
  imports:      [ BrowserModule, routing, YoutubePlayerModule, MetadataModule.forRoot({
      provide: MetadataLoader,
      useFactory: (metadataFactory)
    })
 ],
  declarations: [ AppComponent, BandsComponent, UnderConstruccionComponent  ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
