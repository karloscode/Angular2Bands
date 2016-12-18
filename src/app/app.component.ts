// Importar Component desde el núcleo de Angular
import {Component , OnInit } from '@angular/core';
import { Band } from './models/band';
import { BandsService } from './services/bands.service';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    template: `
        <h1>My Bands Rocks!</h1>
        <hr/>
        <hr/>
        	<nav>
        		<a [routerLink]="['/foo']">Foo</a> <br>
                <a [routerLink]="['/bar']">Bar</a> <br>
                <a *ngFor="let band of bands"  [class.selected]="band === selectedBand"
                    (click)="onSelect(band)"> 
                    {{band.name}}
                    <br>
                </a>  
        	</nav>
        <hr/>
        <hr/>
        <router-outlet></router-outlet>
       
        `,
  providers: [BandsService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent implements OnInit {
  bands: Band[];
  selectedBand: Band;


  constructor(private bandsService: BandsService) { }

    ngOnInit(): void {
       this.bands = this.bandsService.getAll();
       console.log(this.bands[0].name);
    }

    onSelect(band: Band): void {
        this.selectedBand = band;
        console.log(band);

    }

}
