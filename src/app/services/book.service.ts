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

	//@HostBinding('hero') componentHero : Hero;
	

	getBook(url: string): Promise<any> {
		//Call and return result
		return this.http.get(url).toPromise()
	}

	
}