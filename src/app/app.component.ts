// Importar Component desde el núcleo de Angular
import {Component , OnInit } from '@angular/core';
import { Band } from './models/band';
import { BandsService } from './services/bands.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataService } from 'ng2-metadata';
import { CollapseDirective } from 'ng2-bootstrap';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    templateUrl: './views/app.component.html',
    providers: [BandsService] //must be another instance of bands component
})

 
export class AppComponent implements OnInit {
  bands: Band[];
  public isCollapsed: boolean = true;

  constructor ( private bandsService: BandsService , private metadataService: MetadataService) { }

    ngOnInit(): void {
       this.bands = this.bandsService.getAll();
    }

}
