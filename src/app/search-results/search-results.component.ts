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
	adicionaItens : Item[]

	constructor(
		public searchHomeService: SearchHomeService,
		public searchResultService : SearchResultsService,
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

	carregarMaisVideos() {
		this.searchHomeService.searchHomeItems(this.searchHomeService.termoBusca)
			.subscribe(
				(retorno) => {
					this.itens = this.itens.concat(retorno.items)	// Adiciona a lista de itens os novos videos que serão carregados após clicar no botão
				},
				(error) => {
				}
			)
	}

}
