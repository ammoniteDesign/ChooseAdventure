import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Book } from './classes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
	
	constructor(
		private http: Http
	) { }
	

	getBook(url: string): Promise<Book> {
		//Call and return result
		return this.http.get(url)
			.toPromise()
			.then (response => response.json().data as Book)
			.catch(this.handleError)
	}



	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}