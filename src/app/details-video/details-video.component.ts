import { Component, OnInit, Input } from '@angular/core';
import { SearchResultsService } from '../service/search-results.service';
import { SearchHomeService } from '../service/search-home.service';
import { Item } from '../model/search-home.model';

@Component({
	selector: 'app-details-video',
	templateUrl: './details-video.component.html',
	styleUrls: ['./details-video.component.css']
})
export class DetailsVideoComponent implements OnInit {

	item : Item

	constructor(
		private searchResultService : SearchResultsService
	) { }

	ngOnInit() {
		this.item = this.searchResultService.item			// Para ter acesso as informações do vídeo
		console.log(this.item)
	}

}
