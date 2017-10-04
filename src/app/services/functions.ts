import { Injectable, HostBinding } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Hero } from '../classes/hero';


@Injectable()
export class FunctionService {
    
    startAdventure(isCheating: boolean){
        // if(isCheating){
        //     this.hero.godMode = true;
        // }
        //this.phase++;
        console.log("Yay!")
        
        //this.phase;
    } 
}