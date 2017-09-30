/*
 Create Your Own Story
 */
(function(factory) {
	'use strict';
	
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}

}(function ($) {
	'use strict';

	class createAdventure {
	
		// Construct the Game
		constructor(element, settings){

			//Defaults
			this.defaults = $.extend({
				phasesClass: "js-gameScreen",
				phaseBtnsClass: "js-gameBtn",
				setUpFormClass: "js-setUpForm",
				setUpBtnClass: "js-setUpBtn",
				inventoryFormClass: "js-inventoryForm",
				inventoryBtnClass: "js-inventoryBtn",
				
				copyClass: "js-gameCopy",
				locationClass: "js-gameLocation",
				statsClass: "js-gameStats",
				goldClass: "js-gameGold",
				inventoryClass: "js-gameInventory",
				cheatClass: "js-godMode",

				dieClass: "js-gameDie",
				undoClass: "js-gameUndo",
				resetClass: "js-gameReset",

				bookUrl: "ScumQuarter.json",	

				inventorySpace: 6,
				animationLength: 250

			}, settings);

			//DOM Nodes
			//TODO: Get/Set Methods???
			this.$element = $(element);
			this.$phaseScreens = $('.' + this.defaults.phasesClass);
			this.$die = this.$element.find('.' + this.defaults.dieClass).first();
			this.$resetBtn = this.$element.find('.' + this.defaults.resetClass).first();;

			//Game Data
			this.currentPhase = 0;
			this.isAnimating = false;
			this.moves = [];
			this.godMode = false;
			this.pageNum = 0;
			this.possibleMoves =[];

			//User Data
			this.hero = {
				rollModifier: 0,
				location: null,
				inventory: {
					gold: 0,
					items: []
				}
			};			

			//TODO: Create Book
			this.book = null;
			// $.ajax({
			// 	type: "GET",
			//        url: _.defaults.bookUrl,
			//        dataType: "json",
			//        success: function (response) {
			//        	console.log(response);
			//        	// _.book = response;
			//        	// book = JSON && JSON.parse(book) || $.parseJSON(book);
			//        },
			//        error: function(response){
			//        	console.log("FAILED!");
			//        	console.log(response);
			//        }
			//     )};

			//TODO: Do we need to set up proxys? Don't think so... Also let = gold

			//TODO: Set Up Listeners How does classes change this?
			// $(_.$phaseBtns).on('click.createAdventure', _.changePhase);
			// $(_.$inventoryForm input).on('click.createAdventure', _.limitInventory);
			// Game Over Button
			// Game Start Button
		}

		changePhase(){
		}

		setMode(){
			//To Inventory Screen Button
			// $('#startBtn').on('click', function(){
			// 	if(!isAnimating){
			// 		isAnimating = true;
			// 		if(book.options.cheating){
			// 			inputMode = $('#startForm input:checked').val();
			// 			if(inputMode === 'true'){
			// 				godMode = true;
			// 				document.getElementById('invForm').style.display="none";
			// 			}else{
			// 				godMode = false;
			// 				document.getElementById('godModeInv').style.display="none"
			// 			}
			// 		};
			// 		changeScreen('inventoryScreen');
			// 	}
			// });
		}

		limitInventory(){
			//If event delegate target is unchecked:
			//Check the length of the current checked inputs and if it's inventory space - 1 reactivate all unchecked inputs
			
			//If they checked the delegate target
			//Check the length of the current checked inputs and if it's inventory space deactivate all unchecked inputs	
		}

		checkInventory(){
			// //Alert Continue Button
			// $('#alertNext').on('click', function(){
			// 	if(!isAnimating){
			// 		isAnimating = true;
			// 		//Set Inventory
			// 		setInventory();
			// 		//Change Page
			// 		changePage(1);
			// 		//Change Screens
			// 		changeScreen('gameScreen');
			// 	}
			// });
			// $('#alertBack').on('click', function(){
			// 	if(!isAnimating){
			// 		isAnimating = true;
			// 		//Hide Alert
			// 		document.getElementById('invAlert').style.display="none";
			// 		isAnimating = false;
			// 	}
			// });
		}

		setInventory(){
			//Get Inventory
			//for (var i = 0; i < invItems.length; i++){
			// 	if(invItems[i].checked){
			// 		if(invItems[i].getAttribute('name') === 'gold'){
			// 			inventory.changeGold('set', invItems[i].value);
			// 		}else{
			// 			inventory.add(invItems[i].value);
			// 		}	                
			// 	}
			// }
		}

		startGame(){
			//To Adventure Button
			// $('#invBtn').on('click', function(){
			// 	if(!isAnimating){
			// 		isAnimating = true;
			// 		if(book.options.inventory){
			// 			if(boxesChecked < 5 && !godMode){
			// 				//Show Alert
			// 				document.getElementById('invAlert').style.display="block";
			// 				isAnimating = false;
			// 			}else{
			// 				if(!godMode){
			// 					//Set Inventory
			// 					setInventory();
			// 				}else {
			// 					//Set God Mode
			// 					document.getElementById('statsAside').style.display="none";
			// 					document.getElementById('godMode').style.display="block"
			// 				}
			// 				//Change Page
			// 				changePage(1);
			// 				//Change Screens
			// 				changeScreen('gameScreen');
			// 			}
			// 		}else{
			// 			//Change Page
			// 			changePage(1);
			// 			//Change Screens
			// 			changeScreen('gameScreen');
			// 		}

			// 	}
		}

		updateHero(){
			// changeEffect: function(effect, amount) {

			// 	switch(effect){
			// 		case 'set':
			// 			rollEffect.effect = amount;
			// 			break;
			// 		case 'add':
			// 			rollEffect.effect+=amount 
			// 			break;
			// 		case 'subtract':
			// 			rollEffect.effect-=amount 
			// 			break;
			// 		case 'multiply':
			// 			rollEffect.effect*=amount 
			// 			break;
			// 		case 'divide':
			// 			rollEffect.effect/=amount 
			// 			break;
			// 	}
			// 	rollEffect.effect = Math.round(rollEffect.effect);
			// 	document.getElementById('rollEffect').innerHTML=rollEffect.effect;
		}

		updateInventory(){
			// add: function(item) {
			// 	var index = this.items.indexOf(item)
			// 	if(index === -1){
			// 		this.items.push(item);
			// 		//Add image to page
			// 		var newImage = document.createElement('img');
			// 		newImage.src = item + '.jpg';
			// 		newImage.width = '70';
			// 		newImage.height = '70';
			// 		newImage.className = 'inv-item';
			// 		document.getElementById('inventory').appendChild(newImage);
			// 	}
			// },
			// remove: function(item) {
			// 	var index = this.items.indexOf(item)
			// 	if(index >= 0){
			// 		this.items.splice(index, 1);
			// 		//Remove image from page
			// 		var invList = document.getElementById('inventory')
			// 		var lostItem = invList.childNodes[index + 1];
			// 		invList.removeChild(lostItem);
			// 	}
			// },
			// changeGold: function(effect, amount) {
			// 	switch(effect){
			// 		case 'set':
			// 			inventory.gold = amount;
			// 			break;
			// 		case 'add':
			// 			inventory.gold+=amount 
			// 			break;
			// 		case 'subtract':
			// 			inventory.gold-=amount 
			// 			break;
			// 		case 'multiply':
			// 			inventory.gold*=amount 
			// 			break;
			// 		case 'divide':
			// 			inventory.gold/=amount 
			// 			break;
			// 	}
			// 	inventory.gold = Math.round(inventory.gold);
			// 	document.getElementById('gold').innerHTML=inventory.gold;
			// }		
		}

		changePage(){
			// 	var gameBook = document.getElementById('gameBook');
			// var oldOptions = gameBook.getElementsByTagName('div');
			// var optionNumber = oldOptions.length;
			// var n = newPage - 1;
			// possibleMoves = [];

			// //Turn off/on Undo
			// if(moves.length > 0 && $('#undoBtn').hasClass('dead-option') === true){
			// 	//On
			// 	$('#undoBtn').removeClass('dead-option');
			// }else if(moves.length <= 0 && $('#undoBtn').hasClass('dead-option') === false){
			// 	//Off
			// 	$('#undoBtn').addClass('dead-option');

			// }else{}

			// //Turn off/on Die
			// if(book.page[n].die && $('#die').hasClass('dead-option')){
			// 	//On
			// 	$('#die').removeClass('dead-option');
			// }else if(!$('#die').hasClass('dead-option')){
			// 	//Off
			// 	$('#die').addClass('dead-option');

			// }else{}

			
			
			// //Replace Copy
			// document.getElementById('copy').innerHTML=book.page[n].copy;
			
		
			// //Remove Old Options			
			// for (var i = 0; i < optionNumber; i++) {
			// 	oldOptions = gameBook.getElementsByTagName('div');
			// 	gameBook.removeChild(oldOptions[0]);
			// };

			// //Display Options (Show them Deactiveated (be sure to number them with data-option))
			// if(book.page[n].options){
			// 	for (var i = 0; i < book.page[n].options.length; i++) {
			// 		var newOption = document.createElement('div');
			// 		newOption.className="button option dead-option";
			// 		newOption.setAttribute('data-option', i);
			// 		newOption.innerHTML=book.page[n].options[i].text;
			// 		gameBook.appendChild(newOption);
			// 		//Populate the possible moves array
			// 		possibleMoves.push(i);		
			// 	};
			// }
			

			// //Change Location if Applicable (on hold for now)
			// //Change Page Number
			// pageNum = n;

			// //Store Data and Check on God Mode
			// if(godMode){
			// 	//Store Page Number ONLY
			// 	moves.push(pageNum);
				
			// 	//Activate ALL Options
			// 	activateOptions();
			// }else{
			// 	//Store Page/Inventory/Gold
			// 	moves.push([pageNum, inventory.items, inventory.gold])
			// 	//Check for Game End
			// 	if(book.page[n].end){
			// 		gameOver();
			// 	}else{
			// 		//Check for Page Effect
			// 		if(book.page[n].effects){
			// 			//Apply Effects
			// 			if(book.page[n].effects.gold){
			// 				inventory.changeGold(book.page[n].effects.gold[0],book.page[n].effects.gold[1]);
			// 			}
			// 			if(book.page[n].effects.inventory){
			// 				if(book.page[n].effects.inventory.remove){
			// 					for (var i = 0; i < book.page[n].effects.inventory.remove.length; i++) {
			// 						inventory.remove(book.page[n].effects.inventory.remove[i]);
			// 					};
			// 				}else{
			// 					for (var i = 0; i < book.page[n].effects.inventory.add.length; i++) {
			// 						inventory.add(book.page[n].effects.inventory.add[i]);
			// 					};
			// 				}
			// 			}
			// 			if(book.page[n].effects.roll){
			// 				rollEffect.changeEffect(book.page[n].effects.roll[0],book.page[n].effects.roll[1]);				
			// 			}
			// 		}
			// 		//Check Options for Equipment Needs
			// 		for (var i = 0; i < book.page[n].options.length; i++) {
			// 			if(book.page[n].options[i].equipment){
			// 				var hasEquipment = [];
			// 				//Check Gold
			// 				if(book.page[n].options[i].equipment.gold){
			// 					if(inventory.gold >= book.page[n].options[i].equipment.gold){
			// 						hasEquipment.push(true);
			// 					}else{
			// 						hasEquipment.push(false);
			// 					}
			// 				}

			// 				//Check Inventory Items
			// 				if(book.page[n].options[i].equipment.items){
			// 					for (var j = 0; j < book.page[n].options[i].equipment.items.length; j++) {
			// 						var needItem = inventory.items.indexOf(book.page[n].options[i].equipment.items[j]);
			// 						if(needItem >= 0){
			// 							//They Have the Item
			// 							hasEquipment.push(true);
			// 						}else{
			// 							hasEquipment.push(false);
			// 						}
									
			// 					};
			// 				}
			// 				//Check hasEquipment Array depending upon both/neither/either and delete option if needed
			// 				if(book.page[n].options[i].equipment.type === "neither"){
			// 					//Check hasEquipment for any "true"s
			// 					if(hasEquipment.indexOf(true) === -1){
			// 						//No Trues Do Nothing
			// 					}else{
			// 						//Delete the option from the possible move array
									
			// 						var moveIndex = possibleMoves.indexOf(i)
									
			// 						possibleMoves.splice(moveIndex, 1);
			// 					}
			// 				}else if(book.page[n].options[i].equipment.type === "both"){
			// 					//Check hasEquipment for any "falses"s
			// 					if(hasEquipment.indexOf(false) === -1){
			// 						//No falses Do Nothing
			// 					}else{
			// 						//Delete the option from the possible move array
			// 						var moveIndex = possibleMoves.indexOf(i)
			// 						possibleMoves.splice(moveIndex, 1);
			// 					}
			// 				}else{
			// 					//Default is Either
			// 					//Check hasEquipment for any "trues"s
			// 					if(hasEquipment.indexOf(true) === -1){
			// 						//No Trues Delete Option
			// 						var moveIndex = possibleMoves.indexOf(i)
			// 						possibleMoves.splice(moveIndex, 1);
			// 					}else{
			// 						//Has Trues, Do nothing							
			// 					}
			// 				}
			// 			}
			// 		};
						
					
			// 		//Unfreeze for Die (User Input)
			// 		if(book.page[n].die){
			// 			//Check for Dead End Even with Die Roll
			// 			if(possibleMoves.length <= 0){
			// 				gameOver();
			// 			}else{
			// 				isAnimating = false;
			// 			}
						
			// 		}else{
			// 			//Activate Options
			// 			activateOptions();
			// 		}
			// 	}	
			// }
			// }
		}

		rollDie(){
			// //Roll The Die
			// var die = Math.floor((Math.random() * 6) +1)
			// //Animate the Die Roll and End on correct number
			// //WORK
			// //Use Modifiers
			// if(rollEffect.effect != 0){
			// 	die+=rollEffect.effect
			// 	if(die < 1){
			// 		die = 1
			// 	}else if(die > 6){
			// 		die = 6
			// 	}
			// }
			// //Figure Out the Options & Delete wrong ones
			// for (var i = 0; i < book.page[pageNum].options.length; i++) {
			// 	if(book.page[pageNum].options[i].roll && book.page[pageNum].options[i].roll.indexOf(die) === -1){
			// 		//Deactivate Option
			// 		var moveIndex = possibleMoves.indexOf(i)
			// 		possibleMoves.splice(moveIndex, 1);
			// 	}
			// };
			// //Activate Options
			// activateOptions();
			// // $('#die').on('click', function(){
			// // 	if(!isAnimating){
			// // 		isAnimating = true;
			// // 		//Roll Die
			// // 		rollDie();
			// // 	}
			// // });
		}

		activateOptions() {
			// var gameBook = document.getElementById('gameBook');
			// var options = gameBook.getElementsByTagName('div');
			// var hasMove = [];
			// if(godMode){
			// 	for (var i = 0; i < book.page[pageNum].options.length; i++){
			// 		$(options[i]).removeClass('dead-option');
			// 	};
			// }else{
			// 	//Double Check that there is ONE option available
			// 	if(possibleMoves.length <= 0){
			// 		gameOver();
			// 	}else{
			// 		//Activate! & Thaw Triggers
			// 		for (var i = 0; i < possibleMoves.length; i++) {
			// 			$(options[possibleMoves[i]]).removeClass('dead-option');
			// 			//Double Check that the option(s) aren't game over man
			// 			if(book.page[pageNum].options[possibleMoves[i]].end){
			// 				hasMove.push(false);
			// 				//Make sure you can't click on the un-dead button
			// 				$(options[possibleMoves[i]]).attr('style', 'pointer-events:none;');
			// 			}else{
			// 				hasMove.push(true);
			// 			}
			// 		};
			// 		if(hasMove.indexOf(true) < 0){
			// 			gameOver();
			// 		}
			// 		isAnimating = false;
			// 	};

			// }
			// isAnimating = false;
			// $('.option').on('click', function(){
			// 	if(!isAnimating){
			// 		isAnimating = true;
			// 		var optNum = $(this).data('option');
			// 		chooseOption(optNum, book.page[pageNum].options[optNum].page);
			// 	};
			// });
			// console.log(moves)
			// }
		}

		chooseOption(optNum, newPage){
			//Apply option effects if not on God Mode/Option has them
			// if(!godMode && book.page[pageNum].options[optNum].effects){
			// 	//Apply Effects
			// 	if(book.page[pageNum].options[optNum].effects.gold){
			// 		inventory.changeGold(book.page[pageNum].options[optNum].effects.gold[0],book.page[pageNum].options[optNum].effects.gold[1]);
			// 	}
			// 	if(book.page[pageNum].options[optNum].effects.inventory){
			// 		if(book.page[pageNum].options[optNum].effects.inventory.remove){
			// 			for (var i = 0; i < book.page[pageNum].options[optNum].effects.inventory.remove.length; i++) {
			// 				inventory.remove(book.page[pageNum].options[optNum].effects.inventory.remove[i]);
			// 			};
			// 		}else{
			// 			for (var i = 0; i < book.page[pageNum].options[optNum].effects.inventory.add.length; i++) {
			// 				inventory.add(book.page[pageNum].options[optNum].effects.inventory.add[i]);
			// 			};
			// 		}
			// 	}
			// 	if(book.page[pageNum].options[optNum].effects.roll){
			// 		rollEffect.changeEffect(book.page[pageNum].options[optNum].effects.roll[0],book.page[pageNum].options[optNum].effects.roll[1]);				
			// 	}
			// }
			

			// //New Page Time!
			// changePage(newPage);
		}

		undoMove(){

		}

		endGame(){

		}

		resetGame(){
			// if(isAnimating){
			// 	//Reset Game
			// 	isAnimating = true;
			// 	moves = []; 
			// 	rollEffect.changeEffect('set', 0);	
			// 	godMode = false;
			// 	currentLocation = '';
			// 	inventory.changeGold('set', 0);
			// 	pageNum = 0;
			// 	possibleMoves =[];
			// 	inventory.items = [];
			// 	//Remove images from page
			// 	var invList = document.getElementById('inventory')
			// 	while (invList.firstChild) {
			// 		invList.removeChild(invList.firstChild);
			// 	}
			// 	document.getElementById('endScreen').style.display="none"
			// 	boxesChecked = 0;
			// 	for(i=0; i<invItems.length; i++){
			// 			invItems[i].checked=false;
			// 			invItems[i].disabled=false;
					
			// 	}
				
			// 	changeScreen('startScreen');
				
			// }
			// //Remember to kill the Game Over Screen
		}
	}



	//Put the Plugin into the JQuery Namespace and enable it for multiple instances
	$.fn.createAdventure = function () {

		
		var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i = 0, ret;
		for (i; i < l; i++) {
			if (typeof opt == 'object' || typeof opt == 'undefined')
				_[i].createAdventure = new createAdventure(_[i], opt);
			else
				ret = _[i].createAdventure[opt].apply(_[i].createAdventure, args);
			if (typeof ret != 'undefined') return ret;
		}
		return _;
	};
}))