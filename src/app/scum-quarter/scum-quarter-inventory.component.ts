import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import {Hero} from '../classes/hero';
import { InventoryItem } from '../classes/inventory';

import { GameEngineInventoryComponent } from '../game-engine-inventory.component';



@Component({
  selector: 'scum-quarter-inventory',
  templateUrl: './scum-quarter-inventory.component.html'
})

export class ScumQuarterInventoryComponent extends GameEngineInventoryComponent {

};