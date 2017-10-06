import { Directive, Input, Output, EventEmitter } from '@angular/core';



@Directive({
    selector: 'base-class-not-used'
})

export class GameEngineStartComponent {
    @Output() startAdventure = new EventEmitter<boolean>()

    emitStartAdventure(isCheating: boolean){
        this.startAdventure.emit(isCheating);
    }
}