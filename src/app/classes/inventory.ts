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
