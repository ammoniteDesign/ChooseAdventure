import { Component } from '@angular/core';
import { Hero } from './classes';
import { Book } from './classes'

import { BookService } from './get-book.service'

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
})

export class StartComponent{
	//private cheating = BookService.book
}