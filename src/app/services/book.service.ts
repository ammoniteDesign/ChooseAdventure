import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import {Hero} from '../classes/hero';
import {InventoryItem} from '../classes/inventory';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

	constructor(
		private http: Http
	) { }

	getBook(url: string) : Promise<any> {
		return this.http.get(url).toPromise()
			
	}	
}