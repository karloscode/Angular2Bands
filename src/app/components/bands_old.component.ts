import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'bands',	
	templateUrl: '../views/bands.html'
})

export class BandsComponent {

	public titulo: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	){
		this.titulo = "Empleados";
	}
	
	bandas(){
		this.router.navigate(['/', 'nombre-banda']);
	}

}