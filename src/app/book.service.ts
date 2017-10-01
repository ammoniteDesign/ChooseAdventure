import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Book } from './classes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
	
	constructor(
		private http: Http
	) { }
	

	getBook(url: string): Promise<any> {
		//Call and return result
		return this.http.get(url).toPromise()
	}
}