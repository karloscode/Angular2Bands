// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    template: `
        <h1>Angular 2 Bands</h1>
        <hr/>
        	<nav>
        		<a [routerLink]="['/foo']">Foo</a>
                <a [routerLink]="['/bar']">Bar</a>
        	</nav>
        <hr/>
        	<router-outlet></router-outlet>
        <hr/>
        `
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }
