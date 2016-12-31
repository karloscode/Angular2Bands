import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { CollapseDirective } from 'ng2-bootstrap';
import { MetadataModule, MetadataLoader, MetadataStaticLoader, PageTitlePositioning } from 'ng2-metadata';


import { AppComponent }  from './app.component';
import { BandsComponent }  from './components/bands.component';
import { UnderConstruccionComponent }  from './components/under-construccion.component';
import { SelectBandComponent }  from './components/select-band.component';
import { SafePipe} from './pipes/safe.pipe';

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
  imports:      [ BrowserModule, routing, MetadataModule.forRoot({
      provide: MetadataLoader,
      useFactory: (metadataFactory)
    })
 ],
  declarations: [ AppComponent, BandsComponent, UnderConstruccionComponent, SelectBandComponent, SafePipe, CollapseDirective ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
