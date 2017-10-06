import { Directive, Input, Output, EventEmitter } from '@angular/core';
import {Book, BookPages, Page, Option, Effect } from './classes/book';
import {Hero} from './classes/hero';
import {InventoryItem} from './classes/inventory';

@Directive({
    selector: 'base-class-not-used'
})

export class GameEnginePageComponent {
	@Input() hero: Hero;
	@Input() book : Book;
	@Input() currentPage : Page;

	@Output() chooseOption = new EventEmitter<any>();
    @Output() rollDie = new EventEmitter<any>();
    @Output() resetGame = new EventEmitter<any>();
    @Output() setPage = new EventEmitter<any>();
	

	emitChooseOption(option){
		this.chooseOption.emit(option);
	}

	emitRollDie(){
		this.rollDie.emit();
	}

	emitResetGame(){
		this.resetGame.emit();
	}

	emitSetPage(pageNumber){
		this.setPage.emit(pageNumber);
	}
}