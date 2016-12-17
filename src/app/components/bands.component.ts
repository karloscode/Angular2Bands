import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'bands',	
	template: `
		<h2>{{titulo}}</h2>
		<p *ngIf="!nombre">Listado de Bandas</p>
		<p *ngIf="nombre">
			<span>{{nombre}}</span>
			<br/>
			<input type="button" (click)="empleados()" value="Ver los empleados"/>
		</p>

	`
})

export class BandsComponent {

	public titulo: string;
	public nombre: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	){
		this.titulo = "Bandas";
	}

	ngOnInit(){
		this.route.params.forEach((params: Params) => {
			this.nombre = params['nombre'];

		});
	}

	empleados(){
		this.router.navigate(['/']);
	}

}