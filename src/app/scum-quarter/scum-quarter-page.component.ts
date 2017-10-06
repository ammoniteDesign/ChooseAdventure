import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Book, BookPages, Page, Option, Effect } from '../classes/book';
import {Hero} from '../classes/hero';
import { InventoryItem } from '../classes/inventory';

import { GameEnginePageComponent } from '../game-engine-page.component';



@Component({
  selector: 'scum-quarter-page',
  templateUrl: './scum-quarter-page.component.html'
})

export class ScumQuarterPageComponent extends GameEnginePageComponent {

};