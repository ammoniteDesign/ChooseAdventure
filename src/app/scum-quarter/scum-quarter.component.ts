import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import {Hero} from '../classes/hero';
import {InventoryItem} from '../classes/inventory';

import { BookService } from '../services/book.service';
import { GameEngineComponent } from '../game-engine.component';


//Children Views
import { ScumQuarterStartComponent } from './scum-quarter-start.component';
import { ScumQuarterInventoryComponent } from './scum-quarter-inventory.component';
import { ScumQuarterPageComponent } from './scum-quarter-page.component';


@Component({
  selector: 'scum-quarter',
  templateUrl: './scum-quarter.component.html',
  providers: [BookService]
})

export class ScumQuarterComponent extends GameEngineComponent {
  

	constructor(private bookService: BookService) {
		super();
		//Set Default Hero Properties
    this.defaultHero.dieModifier = 0;
    this.defaultHero.godMode = false;
    this.defaultHero.gold = 0;
    this.defaultHero.inventory = [];
    this.defaultHero.location = 1;

    //SetUp Hero
    this.setHero();
	
    //SetUp Book
    bookService.getBook('assets/js/ScumQuarter.json')
    	.then(response => {
    		this.book = response.json() as Book;
    	});
	}
 	
}