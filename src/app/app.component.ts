// Importar Component desde el núcleo de Angular
import {Component , OnInit } from '@angular/core';
import { Band } from './models/band';
import { BandsService } from './services/bands.service';
import { Router, ActivatedRoute } from '@angular/router';


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    template: `
        <h1>My Bands Rocks!</h1>
        <hr/>
        <hr/>
        	<nav> 
        		<a [routerLink]="['/foo']">Foo</a> |
                <a [routerLink]="['/bar']">Bar</a> |
                <a *ngFor="let band of bands" 
                   [routerLink]="[band.url]"> {{band.name}} | </a>  
        	</nav>
        <hr/>
        <hr/>
        <router-outlet></router-outlet>
   
        
        `,
  providers: [BandsService] //must be another instance of bands component
})
 
export class AppComponent implements OnInit {
  bands: Band[];

  constructor ( private bandsService: BandsService  ) { }

    ngOnInit(): void {
       this.bands = this.bandsService.getAll();
    }

}
