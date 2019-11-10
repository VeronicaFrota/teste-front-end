import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { SearchHomeService } from '../service/search-home.service';
import { Item } from '../model/search-home.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search-home',
	templateUrl: './search-home.component.html',
	styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

	form : FormGroup
	itens : Item[]
	encoutrouItem : boolean = true

	constructor(
		private fb : FormBuilder,
		private route : Router,
		private searchHomeService : SearchHomeService
	) { }

	ngOnInit() {
		this.form = this.fb.group({
			procura : this.fb.control('', [Validators.required])
		})
	}

	procurar() {
		this.searchHomeService.searchHomeItems(this.form.value.procura, 'AIzaSyBC8vG940wZ2veXhZemDHcydLi39QdohAQ')
		.subscribe( retorno => {
				if(this.searchHomeService.items.length == 0) {			// Verifica se o termo buscado não foi encontrado
					this.encoutrouItem = false							// Caso não foi encontrado, aciona false, disparando a mensagem de erro na index
				} else {
					this.route.navigate(['/search-results'])			// Caso o termo seja encontrado, redireciona para a listagem de vídeos
				}				
			},
			(error =>  {

			})
		)
	}

}
