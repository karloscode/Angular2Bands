// Importar Component desde el núcleo de Angular
import {Component , OnInit } from '@angular/core';
import { Band } from './models/band';
import { BandsService } from './services/bands.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataService } from 'ng2-metadata';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    template: `
        <img src="../assets/logo.png"/>
        <hr/>
        <hr/>
        	<nav> 
        		<a [routerLink]="['/foo']">|  Foo  |</a> 
                <a [routerLink]="['/bar']">Bar  |</a> 
                <a *ngFor="let band of bands" 
                   [routerLink]="[band.url]"> {{band.name}}  |</a>  
        	</nav>
        <hr/>
        <hr/>
        <router-outlet></router-outlet>
   
        
        `,
  providers: [BandsService] //must be another instance of bands component
})
 
export class AppComponent implements OnInit {
  bands: Band[];

  constructor ( private bandsService: BandsService , private metadataService: MetadataService) { }

    ngOnInit(): void {
       this.bands = this.bandsService.getAll();
    }

}
