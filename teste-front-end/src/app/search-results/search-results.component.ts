import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchHomeService } from '../service/search-home.service';
import { Item } from '../model/search-home.model';
import { Router } from '@angular/router';
import { SearchResultsService } from '../service/search-results.service';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

	itens : Item[]

	constructor(
		private searchHomeService: SearchHomeService,
		private searchResultService : SearchResultsService,
		private route : Router
	) {	}

	ngOnInit() {
		this.itens = this.searchHomeService.items
	}

	/* Recebe o evento(item) e redireciona para a pagina de details-video */
	detalharVideo(item : Item) {
		this.searchResultService.item = item
		this.route.navigate(['/details-video'])
	}

}
