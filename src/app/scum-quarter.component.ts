import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BookService} from './book.service';
import {Book} from './classes';
import {Hero} from './classes';

@Component({
  selector: 'scum-quarter',
  templateUrl: './scum-quarter.component.html'
})

export class ScumQuarterComponent {
	//title = 'Scum Quarter';
	public book : Book;
	public hero = new Hero;
	public phase = 0;

	constructor(bookService: BookService) {
		this.hero.dieModifier = 0;
		this.hero.godMode = false;
		this.hero.gold = 0;
		this.hero.inventory = [];

	    bookService.getBook('assets/js/ScumQuarter.json')
	    	.then(response => this.book = response.json() as Book)
	}

	//TODO: These should be services...
	startAdventure(isCheating: boolean){
		if(isCheating){
			this.hero.godMode = true;
		}
		this.phase = 1;
	}
}