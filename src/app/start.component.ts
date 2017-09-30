import { Component, Input } from '@angular/core';
import { Hero } from './classes';
import { Book } from './classes'

import { BookService } from './book.service'

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
})

export class StartComponent{
	 @Input() book: Book;
	 @Input() hero: Hero;
}