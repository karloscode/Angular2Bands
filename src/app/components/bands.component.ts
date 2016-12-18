import { Component , Input } from '@angular/core';
import { Band } from '../models/band';
import { BandsService } from '../services/bands.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'bands',	
	template: `
		<div *ngIf="band">
			<h2>{{band[0].name}}</h2>
			<span>{{band[0].text}}</span>
			<img src={{band[0].urlImg}}/>


		</div>
		
		{{nombre}}
		<youtube-player
    	  [videoId]="id"
     	 (ready)="savePlayer($event)"
      	 (change)="onStateChange($event)">
      	</youtube-player>
	`,
  providers: [BandsService] 
})

export class BandsComponent {
	band: Band[];
	private url: string;
	private player ;
  	private id: string;

  	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private bandsService: BandsService
	) {}

  	ngOnInit(){
		this.route.params.forEach((params: Params) => {
		this.url = params['url'];
		console.log(this.url);
		this.band= this.bandsService.getByUrl(this.url);
		console.log(this.band);
		this.id = this.band[0].urlYoutube;
		});
	}

 
    savePlayer (player) {
    	this.player = player;
    	console.log('player instance', player)
    }

  	onStateChange(event){
    	//console.log('player state', event.data);
  	}
}