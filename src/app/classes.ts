export class Hero {
	godMode: boolean;
	inventory: InventoryItem[];
	gold: number;
	dieModifier: number;
	location: number;
	//moves: Moves;
}


export class Book {
	inventoryPage: InventoryPage;
	bookPages: BookPages;
}


export class InventoryPage {
	inventoryChoices: InventoryItem[];
	amount : number;
}

export class InventoryItem {
	name: string;
	type: string;
	chosen : boolean;

	//Nullable
	display: string;
	imgUrl: string;
	amount: number;
}

export class BookPages {
	page: Page
}

export class Page {

	//Must Haves
	copy: string;
	number: number;

	//Nullable 
	options: Option[]; //Null/Empyt
	die: boolean; //False
	dieRoll: number;
	effect: Effect[]; //Null
	gameOver: boolean; //False
}

export class Option {
	//Must Haves
	copy: string;
	enabled: boolean;

	//Nullable
	page: string;
	roll: number[]; //Only if Page has die....
	equipment: string[]; //Null/Empty
	equipmentState: string; //Nullable (options: any, none, all)
	gold: number; //Nullable
	effect: Effect[]; //Nullable
}

export class Effect {
	type: string;
	action: string;

	//Nullable
	amount: number; 
	item: InventoryItem;
}