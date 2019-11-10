import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from '../model/search-home.model';

// @Injectable()
@Injectable({
	providedIn: 'root'
})
export class SearchHomeService {

	constructor(private httpClient: HttpClient) { }

	items : Item[]

	public searchHomeItems(termoBusca : any , apiKey : string): Observable<any> {
		return this.httpClient.get<any>(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termoBusca}&key=${apiKey}`).pipe(
			tap(response => {
				this.items = response.items
				console.log("Agora estou no service home, GOTCHA")
				console.log(this.items)
			})
		)
	}
}
