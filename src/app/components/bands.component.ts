import { Component , Input , OnInit} from '@angular/core';
import { Band } from '../models/band';
import { BandsService } from '../services/bands.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MetadataService } from 'ng2-metadata';
import { SafePipe} from '../pipes/safe.pipe';

@Component({
	selector: 'bands',	
	templateUrl: '../views/bands.component.html',
  providers: [BandsService] 
})

export class BandsComponent implements OnInit{
	band: Band[];
	public url: string;
  	public id: string;

  	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private bandsService: BandsService,
		private metadataService: MetadataService
	) {}

  	ngOnInit(){
		this.route.params.forEach((params: Params) => {
		this.url = params['url'];
		//console.log(this.url);
		this.band= this.bandsService.getByUrl(this.url);
		//console.log(this.band);
		this.id = this.band[0].urlYoutube;
		this.metadataService.setTitle(this.band[0].titleMeta);
   		this.metadataService.setTag('keywords', this.band[0].keywordsMeta);

		});
	}

}