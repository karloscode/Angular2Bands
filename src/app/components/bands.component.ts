import { Component , Input } from '@angular/core';
import { Band } from '../models/band';
import { BandsService } from '../services/bands.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MetadataService } from 'ng2-metadata';


@Component({
	selector: 'bands',	
	templateUrl: '../views/bands.component.html',
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
		private bandsService: BandsService,
		private metadataService: MetadataService
	) {}

  	ngOnInit(){
		this.route.params.forEach((params: Params) => {
		this.url = params['url'];
		console.log(this.url);
		this.band= this.bandsService.getByUrl(this.url);
		console.log(this.band);
		this.id = this.band[0].urlYoutube;
		this.metadataService.setTitle(this.band[0].titleMeta);
   		this.metadataService.setTag('keywords', this.band[0].keywordsMeta);
   		this.metadataService.setTag('description', this.band[0].descriptionMeta);
		});
	}

 
    savePlayer (player) {
    	this.player = player;
    	//console.log('player instance', player)
    }

  	onStateChange(event){
    	//console.log('player state', event.data);
  	}
}