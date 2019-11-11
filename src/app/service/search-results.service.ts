import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/search-home.model';

@Injectable({
	providedIn: 'root'
})
export class SearchResultsService {

	constructor(private httpClient : HttpClient	) { }

	item : Item

	searchResultItens(item : any): Observable<any> {
		return this.httpClient.get<any>(`https://www.googleapis.com/youtube/v3/videos?id=${item}&part=snippet,statistics&key=AIzaSyBC8vG940wZ2veXhZemDHcydLi39QdohAQ`)
	}
}

