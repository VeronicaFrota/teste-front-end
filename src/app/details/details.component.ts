import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchHomeService } from '../service/search-home.service';
import { SearchResultsService } from '../service/search-results.service';
import { Item } from '../model/search-home.model';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	@Input() item
	@Output() detalhar : EventEmitter<any> = new EventEmitter<any>()

	// "Chaves" para ligarem e desligarem tiitulos e botões em pagina de details-video
	@Input() deligaBotaoLike = false
	@Input() desligaTituloDown = false
	@Input() desligaBotaoDetalhe = false
	@Input() deligaBotaoVisualizacao = false

	constructor( 
		private route : Router
	) { }

	ngOnInit() {
	}

	// Realiza a exibição e funcionalidade do video
	player: YT.Player;

	savePlayer(player) {
		this.player = player;
		console.log('player instance', player);
	}
	onStateChange(event) {
		console.log('player state', event.data);
	}

	/* Emite o evento quando for clicado, avisando para o componente de search-results que há 
	item para ser exibido */
	detalharVideo() {
		this.detalhar.emit(this.item)
	}
}
