import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import {Hero} from '../classes/hero';
import {InventoryItem} from '../classes/inventory';

import { BookService } from '../services/book.service';
import { FunctionService } from '../services/functions';

//Child
import { ScumQuarterStartComponent } from './scum-quarter-start.component';

@Component({
  selector: 'scum-quarter',
  templateUrl: './scum-quarter.component.html',
  providers: [BookService, FunctionService]
})

export class ScumQuarterComponent {
	//title = 'Scum Quarter';
	public book : Book;
	public currentPage : Page;
	public hero = new Hero;
	public phase = 0;

	

	constructor(bookService: BookService, functionService: FunctionService) {
		this.hero.dieModifier = 0;
		this.hero.godMode = false;
		this.hero.gold = 0;
		this.hero.inventory = [];
		this.hero.location = 0;

	    bookService.getBook('assets/js/ScumQuarter.json')
	    	.then(response => this.book = response.json() as Book);

	}


	//TODO: These should be services...
// 	var startAdventure = (function(){
//         console.log(this);
//         // if(isCheating){
//         //  //this.componentHero.godMode = true;
//         // }
//         //this.phase++;
//         return startAdventure;
// })();

	chooseInventory(isChecked: boolean, inventoryItem: InventoryItem){
		if(isChecked){
			this.hero.inventory.push(inventoryItem);
		}else{
			this.hero.inventory.splice(this.hero.inventory.indexOf(inventoryItem), 1);
		}
		inventoryItem.chosen = isChecked;
	}

	setInventory(startPage?: string){
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
		//TODO: Set this to "1" I am using to debug
		//TODO: reset all invnetory to chosen false
		this.setPage("2");
		this.phase++;
	}

	setPage(pageNumber: string){
		this.currentPage = this.book.bookPages[pageNumber];

		//Modify Hero if page has ouchies
		if(this.currentPage.effect != undefined){
			this.enactModifiers(this.currentPage.effect);
		}

		//Enable Options if No Die or Reset and Roll Die
		if(!this.currentPage.die || this.hero.godMode){
			this.enableOptions();
		}else{
			this.currentPage.dieRoll = null;
		}
	}

	//TODO:
	enactModifiers(effects: Effect[]){
		//Roll (subtract, add, reset)
		//Inventory (remove, add, empty)
		//Gold (add, subtract, multiply, divide, empty)
	}

	rollDie(){
		if(this.currentPage.dieRoll === null){
			//Roll Die then Enable Options
			this.currentPage.dieRoll = Math.floor((Math.random() * 6) +1)
			this.enableOptions();
		}
		
	}

	enableOptions(){
		if(this.currentPage.options != undefined){
			for(let i = 0; i < this.currentPage.options.length; i++){
				//IF God mode OR (equipment && (if roll is needed OR Roll))
				if(this.hero.godMode || (this.equipmentNeeded(this.currentPage.options[i]) && (!this.currentPage.die || this.rollNeeded(this.currentPage.options[i])))){
					//Enable the Option
					this.currentPage.options[i].enabled = true;
				}
			}
		}					
	}

	equipmentNeeded(option: Option){
		//Equipment Check
		switch(option.equipmentState){
			case "any":
				for(let i = 0; i < option.equipment.length; i++){
					if(this.checkInventory(option.equipment[i])){
						//You have it. Stop the loop and return true
						//console.log("I have the " + option.equipment[i] + " I win")
						return true;
					}
				}
				//The loop didn't stop ergo you have none of them
				//console.log("I don't have anything I lose")
				return false;				
			case "all":
				for(let i = 0; i < option.equipment.length; i++){
					if(!this.checkInventory(option.equipment[i])){
						//You don't have it. Stop loop and return false
						//console.log("I dont' have the " + option.equipment[i] + " I lose")
						return false;
					}
				}
				//The loop didn't stop so you have all of them
				//console.log("I have ALL THE THINGS I win")
				return true;
			case "none":
				for(let i = 0; i < option.equipment.length; i++){
					if(this.checkInventory(option.equipment[i])){
						//console.log("I have the " + option.equipment[i] + " I lose")
						//You have it. Stop the loop and return false
						return false;
					}
				}
				//The loop didn't stop so you have none of them
				//console.log("I have nothing I win")
				return true;
			default:
				return true;						
		}
	}

	checkInventory(itemName: string){
		console.log(this.hero.inventory)
		for(let i = 0; i < this.hero.inventory.length; i++){
			if(this.hero.inventory[i].name === itemName){
				return true;
			}
		}
		return false;
	}

	rollNeeded(option: Option){
		var modifiedRoll = this.hero.dieModifier + this.currentPage.dieRoll;
		//Make sure it's in range
		if(modifiedRoll < 1){
			modifiedRoll = 1
		}else if(modifiedRoll > 6){
			modifiedRoll = 6
		}

		if(option.roll.indexOf(modifiedRoll) != -1){
			//You Have the Roll
			return true;
		}else{
			return false;
		}
	}

	chooseOption(option: Option){
		//Because JS will read my JSon as a number irredisregardless
		var pageString = option.page.toString();

		//Enact the Effects on Option
		this.enactModifiers(option.effect);

		//Disable all options again
		for(let i = 0; i < this.currentPage.options.length; i++){
			this.currentPage.options[i].enabled = false;
		}

		//Go to new page	
		this.setPage(pageString);
	}
}