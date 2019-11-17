import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from '../model/search-home.model';

@Injectable({
	providedIn: 'root'
})
export class SearchHomeService {

	constructor(
		private httpClient: HttpClient,
	) { }

	items : Item[] = []
	pageToken : string
	termoBusca : string

	/* ${this.pageToken ? this.pageToken : '' } = Ternário para verificar se existe uma pageToken, caso for a primeira requisição, não 
	*  possui token, caso for a próxima requisição, pega o próximo token com os vídeos
	*/
	public searchHomeItems(termoBusca : any): Observable<any> {
		return this.httpClient.get<any>(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termoBusca}&key=AIzaSyBC8vG940wZ2veXhZemDHcydLi39QdohAQ&type=video&maxResults=10&order=viewCount&pageToken=${this.pageToken ? this.pageToken : '' }`).pipe(
			tap(response => {

				this.items = this.items.concat(response.items)	// Adiciona itens novos na lista já existente

				this.pageToken = response.nextPageToken			// Pega o token da próximo página para carregar mais vídeos e assim adiciona-lo a lista já existente (linha 25)

				this.termoBusca = termoBusca					// Salva na váriavel o termo de busca

			})
		)
	}
}
