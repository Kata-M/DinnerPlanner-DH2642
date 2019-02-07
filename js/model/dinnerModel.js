//DinnerModel Object constructor
var DinnerModel = function() {
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	var numberOfGuests = 1; //type int
	var menu = [];
	var dishes = [];
	var allTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];

	//OBSERVER STUFF ----->
	//FUNCTION NOTIFY
	var observers=[];
    this.addObserver=function(observer){ observers.push(observer); }
   
    this.notifyObservers=function(){ 
        for(var i=0; i<observers.length; i++)
             observers[i](this); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
    }

    this.removeObserver=function(observer){  /* remove observer from array */}
	//OBSERVER STUFF <-----


	this.setNumberOfGuests = function(num) {
		//DONE Lab 1
		if(num>0){
			numberOfGuests = num;
		}
		this.notifyObservers();
	}
	
	this.getNumberOfGuests = function() {
		//DONE Lab 1
		return numberOfGuests;

	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//DONE Lab 1
		var selectedDish;
		var found = false;
		menu.forEach(function(menuDish)
		{

			if(menuDish.type == type){
				selectedDish = menuDish;
				found = true;
			}
		});
			if(!found){
				alert("This type dish does not exist on the menu!");
			}
			return selectedDish;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//DONE Lab 1
		return menu; 

	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var returnIngredients = new Array();
		dishes.forEach(function(dish)
		{
			dish.ingredients.forEach(function(ingredient) {
					returnIngredients.push(ingredient);
			});
		});

		return returnIngredients;
	}

	this.getAllTypes = function() {		

		return allTypes;
		
	}

	//Returns all ingredients for the dish selected.
	this.getIngredientsforDish = function(dishId) {
		//TODO Lab 1
		var returnIngredients = new Array();
		var dish = this.getDish(dishId);

		dish.ingredients.forEach(function(ingredient){
			returnIngredients.push(ingredient);
		});
		console.log(returnIngredients);
		return returnIngredients;
	}


	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//DONE Lab 1
		var totalPrice = 0;
		menu.forEach(function(menuDish)
		{
		
			menuDish.extendedIngredients.forEach(function(ingredient) {
					 totalPrice += 1;
			});
		});
		return totalPrice*this.getNumberOfGuests();
		
	}
		


	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var counter = 0;
		console.log(id);
		var alreadyInMenu = false;

		this.getDish(id)
		.then(dish => {
				// if menu empty or does not exist, put new element in
				if (menu === undefined || menu.length == 0) {

					menu[0] = dish;

				//if items already in the menu
				}else{ 

					menu.forEach(function(menuDish)
					{
					
						if(menuDish.id == id){
							alreadyInMenu = true;
							//break;
						}
						counter++;
					});
					if(alreadyInMenu == false){
					//add new dish to the end of the menu array
							menu[counter] = dish;
							console.log(dish);
					}
				}

				this.notifyObservers();
		})	
	}


	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1
		var counter = 0;
		var idFound = false;

		if(menu.length == 1){
			if(menu[counter].id == id){
				menu.splice(counter, 1); 
			}else{
				alert("The dish you tried to remove does not excist on the menu!");
			}
		}else{

			menu.forEach(function(menuDish)
				{
					if(menuDish.id == id){
						//remove the excisting dish 
						menu.splice(counter, 1); 
						idFound = true;
					}
					counter++;
				});

				if(idFound == false){
					alert("The dish you tried to remove does not exist on the menu!");
				}

		}
	}


	//get all dishes to display using View
	this.getReallyAllDishes = function() {
		//TODO Lab 1
		//try using filter!
		var returnAllDishes = new Array();
		dishes.forEach(function(dish) {
				returnAllDishes.push(dish);
				console.log(dish);
		});
		console.log(returnAllDishes);
		return returnAllDishes;
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	 this.getAllDishes = function (type, filter) {
		var SOME_API_URL;
		var API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";
		

		if(type != null){
			SOME_API_URL  = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="+type;
		}
		if(filter != null && type != null){
			
			SOME_API_URL  = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="+
			type+"&query="+filter;
		}
		
		return fetch(SOME_API_URL,{ 
				  headers:{   
					  'X-Mashape-Key': API_KEY
				  }
			}).then(response => response.json())
			   .then(data => data.results)
	  }   



	this.getDishCost = function(dish) {

		

		var dishCost = 0; 
		dish.extendedIngredients.forEach(function(ingredient)
		{
			dishCost += 1;
		});
		return dishCost;
	}


	this.getDish = function (id) {

		var SOME_API_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information";
		var API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

		var dish = fetch(SOME_API_URL,{ 
			 headers:{   
				'X-Mashape-Key': API_KEY
			}  
		})

		return dish.then(data => data.json())
		
	}

}