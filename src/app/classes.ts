export class Hero {
	godMode: boolean;
	inventory: InventoryItem[];
	gold: number;
	dieModifier: number;
	//moves: Moves;
}

export class Page {

	//Must Haves
	copy: string;
	number: number;

	//Nullable 
	options: Option[]; //Null/Empyt
	die: boolean; //False
	effect: Effect[]; //Null
	gameOver: boolean; //False
}

export class Option {

	//Must Haves
	copy: string;
	page: number;

	//Nullable
	roll: number[]; //Only if Page has die....
	equipment: InventoryItem[]; //Null/Empty
	equipmentState: string; //Nullable (options: any, none, all)
	gold: number; //Nullable
	effect: Effect[]; //Nullable
}

export class InventoryItem {
	name: string;

	//Nullable
	display: string;
	imgUrl: string;
}

export class Effect {
	type: string;
	action: string;

	//Nullable
	amount: number; 
	item: InventoryItem;
}

export class Book {
	//Start Page, Inventory Page and BookPages here
}