import { Directive, Input, Output, EventEmitter } from '@angular/core';
import {Book, BookPages, Page, Option, Effect } from './classes/book';
import {Hero} from './classes/hero';
import {InventoryItem} from './classes/inventory';

@Directive({
    selector: 'base-class-not-used'
})

export class GameEngineInventoryComponent {
	@Input() hero: Hero;
	@Input() book : Book;
	@Input() currentPage : Page;

	@Output() chooseInventory = new EventEmitter<any>();
    @Output() startBook = new EventEmitter<any>();
	

	emitStartBook(){
		this.startBook.emit();
	}

	emitChooseInventory(isChecked: boolean, inventoryItem: InventoryItem){
		var paramObject = {isChecked: isChecked, inventoryItem: inventoryItem}
		this.chooseInventory.emit(paramObject);
	}

}