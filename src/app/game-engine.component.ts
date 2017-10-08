import { Directive } from '@angular/core';

import {Book, BookPages, Page, Option, Effect } from './classes/book';
import {Hero} from './classes/hero';
import {InventoryItem} from './classes/inventory';

@Directive({
    selector: 'base-class-not-used'
})

export class GameEngineComponent {
    protected book : Book;
    public defaultHero : Hero;

    protected currentPage : Page;
    protected hero : Hero;
    protected phase : number;
    

    constructor() {   
    }
    

    //HANDLERS
    //Start Adventure Event Handler
    startAdventure(isCheating: boolean){
        this.setCheating(isCheating);
        this.setPhase((this.phase + 1));
    }

    //Start Book Event Handler
    startBook(){
        this.setInventory();
        this.resetInventoryChoices();
         //TODO: Set this to "1" I am using to debug
        this.setPage("1");
        this.setPhase((this.phase + 1));
    }

    //Reset Game Event Handler
    resetGame(){
        this.setHero();
        this.setPhase(0);
        this.setPage(null);
    }

    //Inventory Form Checkbox Event Handler
    chooseInventory(paramObject){
        if(paramObject.isChecked){
            this.addToInventory(paramObject.inventoryItem);
        }else{
            this.removeFromInventory(paramObject.inventoryItem.name);
        }
        paramObject.inventoryItem.chosen = paramObject.isChecked;
    }

    //Die Roll Event Handler
    rollDie(){
        if(this.currentPage.dieRoll === null){
            this.currentPage.dieRoll = this.dieHelper(6);
            if(this.currentPage.options != undefined){
                this.enableOptions();
            }
        }        
    }

    //Choose an Option Event Handler and Associated Setters
    chooseOption(option: Option){
        //Because JS will read my JSon as a number irredisregardless
        var pageString = option.page.toString();

        //Enact the Effects on Option
        if(option.effect != undefined){
            this.enactModifiers(option.effect);
        }        

        //Disable all options again
        this.disableOptions();

        //Go to new page    
        this.setPage(pageString);
    }

    //SETTERS
    //Set Hero as Default Hero
    setHero(){
        //Need to break the bindings. This hack is the only thing that worked
        this.hero  = JSON.parse(JSON.stringify(this.defaultHero));
    }

    //Set Cheating
    setCheating(isCheating: boolean){
        if(isCheating){
            this.hero.godMode = true;
        }
    }

    //Set Phase
    setPhase(newPhase: number){
        this.phase = newPhase;
    }

    //Add Inventory Object to Hero's Inventory
    addToInventory(inventoryItem){
        this.hero.inventory.push(inventoryItem);
        console.log(this.defaultHero)
        console.log(this.hero)
    }

    //Remove Hero's Inventory Object by Object's Name
    removeFromInventory(inventoryItemName: string){
        var itemIndex = this.hero.inventory.findIndex(inventoryItem => inventoryItem.name === inventoryItemName);
        this.hero.inventory.splice(itemIndex, 1);
        console.log(this.defaultHero)
    }

    //Seperate Out Special Inventory Objects
    setInventory(){
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
    }

    resetInventoryChoices(){
        var inventoryChoices = this.book.inventoryPage.inventoryChoices
        for(var i = 0; i < inventoryChoices.length; i++){
            inventoryChoices[i].chosen = false;
        }
    }

    //Current Page and Associated Handlers
    setPage(pageNumber: string){
        if(pageNumber != null){
            //Because JS will read my JSon as a number irredisregardless
            var pageString = pageNumber.toString();
             //TODO: Save Hero Here

            this.currentPage = this.book.bookPages[pageString];

            //Modify Hero if page has ouchies
            if(this.currentPage.effect != undefined){
                this.enactModifiers(this.currentPage.effect);
            }

            //Enable Options OR Null out Die
            if((!this.currentPage.die || this.hero.godMode) && this.currentPage.options != undefined){
                this.enableOptions();
            }else{
                this.currentPage.dieRoll = null;
            }
        }else{
            this.currentPage = null;
        }
       
    }

    //Modify the Hero with Effects
    enactModifiers(effects: Effect[]){        
        for(let i = 0; i < effects.length; i++){
             //Possibles (roll, inventory, gold)
            switch(effects[i].type){
                case "roll":
                    this.hero.dieModifier = this.mathHelper(this.hero.dieModifier, effects[i].action, effects[i].amount);
                    break;
                case "inventory":
                     //Inventory (remove, add, empty)
                    switch(effects[i].action){
                        case "remove":
                            this.removeFromInventory(effects[i].itemName);
                            break;
                        case "add":
                            this.addToInventory(effects[i].item);
                            break;
                        case "empty":
                            this.hero.inventory = [];
                            break;
                        default:
                            console.log("Error");
                            break;
                    }
                    break;
                case "gold":
                    this.hero.gold = this.mathHelper(this.hero.gold, effects[i].action, effects[i].amount);
                    break;
                default:
                    console.log("Error");
                    break;
            }
        }       
    }

    //Enable Page Options
    enableOptions(){
        for(let i = 0; i < this.currentPage.options.length; i++){

            if(this.hero.godMode){

                this.currentPage.options[i].enabled = true;

            }else{
                //Must Check Gold, Equipment and Roll
                var gotEquipment = true;
                var gotGold = true;
                var gotRoll = true;

                if(this.currentPage.options[i].roll != undefined){
                    gotRoll = this.rollNeeded(this.currentPage.options[i])
                }

                if(this.currentPage.options[i].equipmentState != undefined){
                    gotEquipment = this.equipmentNeeded(this.currentPage.options[i])
                }

                if(this.currentPage.options[i].gold != undefined){
                    gotGold = this.goldNeeded(this.currentPage.options[i])
                }

                //Check that Hero passed all tests
                if(gotGold && gotEquipment && gotRoll){
                    this.currentPage.options[i].enabled = true;
                }
            }           
        }                         
    }

    //Disable Page Options
    disableOptions(){
        for(let i = 0; i < this.currentPage.options.length; i++){
            this.currentPage.options[i].enabled = false;
        }
    }

    //HELPERS
    //Math 
    mathHelper(origNumber: number, action: string, amount: number){
        //Possibles (add, subtract, multiply, divide, reset)
        switch(action){
            case "subtract":
                return origNumber - amount;
            case "add":
                return origNumber + amount;
            case "multiply":
                return origNumber * amount;
            case "divide":
                return origNumber / amount;
            case "reset":
                return 0;
            default:
                console.log("Error");
                break;
        }
    }

    //Random Number Generator
    dieHelper(dieSides: number){
        return Math.floor((Math.random() * dieSides) +1);
    }
    
    //Check Hero's Inventory Against Option Parameters
    equipmentNeeded(option: Option){
        //Equipment Check
        switch(option.equipmentState){
            case "any":
                for(let i = 0; i < option.equipment.length; i++){
                    if(this.checkInventory(option.equipment[i])){
                        //You have it. Stop the loop and return true
                        return true;
                    }
                }
                //The loop didn't stop ergo you have none of them
                return false;               
            case "all":
                for(let i = 0; i < option.equipment.length; i++){
                    if(!this.checkInventory(option.equipment[i])){
                        //You don't have it. Stop loop and return false
                        return false;
                    }
                }
                //The loop didn't stop so you have all of them
                return true;
            case "none":
                for(let i = 0; i < option.equipment.length; i++){
                    if(this.checkInventory(option.equipment[i])){
                        //You have it. Stop the loop and return false
                        return false;
                    }
                }
                //The loop didn't stop so you have none of them
                return true;
            default:
                console.log("Error")
                break;                        
        }
    }

    //Check Hero's Inventory for Item
    checkInventory(itemName: string){
        for(let i = 0; i < this.hero.inventory.length; i++){
            if(this.hero.inventory[i].name === itemName){
                return true;
            }
        }
        return false;
    }

    //Check Hero's Gold Against Option Parameters
    goldNeeded(option: Option){
        if(option.gold < this.hero.gold){
            //You Have the Gold
            return true;
        }else{
            return false;
        }
    }

    //Check Roll Against Option Parameters
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
}