import { Component } from '@angular/core';
import {BookService} from './book.service';
import {Book} from './classes';
import {Hero} from './classes';

@Component({
  selector: 'scum-quarter',
  //Want a Dynamic template here....
  templateUrl: './scum-quarter.component.html'
})

export class ScumQuarterComponent {
	//title = 'Scum Quarter';
	public book = new Book;
	public hero = new Hero;

	constructor(bookService: BookService) {
		this.hero.dieModifier = 0;
		this.hero.godMode = false;
		this.hero.gold = 0;
		this.hero.inventory = [];

	    bookService.getBook('assets/js/ScumQuarter.json')
	    	.then(function(result){
	    		book => this.book = book;
	    		//Activate the Buttons
	    	})
	    
	    
	}	
}