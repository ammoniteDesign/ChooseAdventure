import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BookService} from './book.service';
import {Book} from './classes';
import {Hero} from './classes';
import {InventoryItem} from './classes';

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
			this.phase = 2;
		}else{
			this.phase = 1;
		}
	}

	chooseInventory(isChecked: boolean, inventoryItem: InventoryItem){
		if(isChecked){
			this.hero.inventory.push(inventoryItem);
		}else{
			this.hero.inventory.splice(this.hero.inventory.indexOf(inventoryItem), 1);
		}
		inventoryItem.chosen = isChecked;
	}

	setInventory(){
		for(var i = 0; i < this.hero.inventory.length; i++){
			switch(this.hero.inventory[i].type) {
				case "gold":
					this.hero.gold =+ this.hero.inventory[i].amount;
					this.hero.inventory.splice(i, 1);
					i = i - 1;
					break;
				default:
					break;
			}
		}
		this.phase = 2;
	}

	
}