import { Component, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import { BookService } from '../services/book.service';
import {Hero} from '../classes/hero';
import { FunctionService } from '../services/functions';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'scum-quarter-start',
  templateUrl: './scum-quarter-start.component.html'
})

export class ScumQuarterStartComponent {
	@Input() hero: Hero;
	@Input() phase;

	constructor(private functionService: FunctionService) {

  	}
}
