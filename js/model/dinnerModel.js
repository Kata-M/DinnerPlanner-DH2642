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
		/*
		var allTypes = new Array();
		var foundSame = false;
		var n = 0;
			
		
			foundSame = false;
			for(var i = 0; i<dishes.length; i++){
				

				foundSame = allTypes.includes(dishes[i].type);
				if(foundSame){
				
				}else{
			
					allTypes.push(dishes[i].type);
				}
			}
				
		*/		

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

					if(alreadyInMenu == true){
					//remove the excisting dish and add it again
							//this.removeDishFromMenu(id);
							//menu.push(this.getDish(id));

					}else{
					//add new dish to the end of the menu array
							menu[counter] = dish;
							console.log(dish);
					}
				}

				this.notifyObservers();
		}).catch( error => {
			alert("Error in the network connection! ):");
			console.log(error);
	   });

		
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
	
	// this.getAllDishes = function (type,filter) {
	//   return dishes.filter(function(dish) {
	// 	var found = true;
	// 	if(filter){
	// 		found = false;
	// 		dish.ingredients.forEach(function(ingredient) {
	// 			if(ingredient.name.indexOf(filter)!=-1) {
	// 				found = true;
	// 			}
	// 		});
	// 		if(dish.name.indexOf(filter) != -1)
	// 		{
	// 			found = true;
	// 		}
	// 	}
	// 	if(type=="all"){
	// 			return found;
	// 	}
	//   	return dish.type == type && found;
	//   });	
	// }

	 this.getAllDishes = function (type, filter) {
		var SOME_API_URL;
		var API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";
		

		if(type != null){
			SOME_API_URL  = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="+type;
		}
		/*
		if(filter != null){
			SOME_API_URL  = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query="+filter;
		}else{
			SOME_API_URL  = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";
		}*/
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

	//Return dish cost
	// this.getDishCost = function(dish) {
	// 	//TODO Lab 1
	// 	var dishCost = 0; 
	// 	dish.ingredients.forEach(function(ingredient)
	// 	{
	// 		dishCost += ingredient.price;
	// 	});
	// 	return dishCost;
	// }

	this.getDishCost = function(dish) {

		

		var dishCost = 0; 
		dish.extendedIngredients.forEach(function(ingredient)
		{
			dishCost += 1;
		});
		return dishCost;
	}



	//function that returns a dish of specific ID
	// this.getDish = function (id) {
	//   for(key in dishes){
	// 		if(dishes[key].id == id) {
	// 			return dishes[key];
	// 		}
	// 	}
	// }

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


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

	// var dishes = [{
	// 	'id':1,
	// 	'name':'French toast',
	// 	'type':'test',
	// 	'image':'toast.jpg',
	// 	'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
	// 	'ingredients':[{ 
	// 		'name':'eggs',
	// 		'quantity':0.5,
	// 		'unit':'',
	// 		'price':10
	// 		},{
	// 		'name':'milk',
	// 		'quantity':30,
	// 		'unit':'ml',
	// 		'price':6
	// 		},{
	// 		'name':'brown sugar',
	// 		'quantity':7,
	// 		'unit':'g',
	// 		'price':1
	// 		},{
	// 		'name':'ground nutmeg',
	// 		'quantity':0.5,
	// 		'unit':'g',
	// 		'price':12
	// 		},{
	// 		'name':'white bread',
	// 		'quantity':2,
	// 		'unit':'slices',
	// 		'price':2
	// 		}]
	// 	},{
	// 	'id':2,
	// 	'name':'Sourdough Starter',
	// 	'type':'starter',
	// 	'image':'sourdough.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'active dry yeast',
	// 		'quantity':0.5,
	// 		'unit':'g',
	// 		'price':4
	// 		},{
	// 		'name':'warm water',
	// 		'quantity':30,
	// 		'unit':'ml',
	// 		'price':0
	// 		},{
	// 		'name':'all-purpose flour',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':2
	// 		}]
	// 	},{
	// 	'id':3,
	// 	'name':'Baked Brie with Peaches',
	// 	'type':'starter',
	// 	'image':'bakedbrie.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'round Brie cheese',
	// 		'quantity':10,
	// 		'unit':'g',
	// 		'price':8
	// 		},{
	// 		'name':'raspberry preserves',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':10
	// 		},{
	// 		'name':'peaches',
	// 		'quantity':1,
	// 		'unit':'',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':100,
	// 	'name':'Meat balls',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
	// 	'ingredients':[{ 
	// 		'name':'extra lean ground beef',
	// 		'quantity':115,
	// 		'unit':'g',
	// 		'price':20
	// 		},{
	// 		'name':'sea salt',
	// 		'quantity':0.7,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'small onion, diced',
	// 		'quantity':0.25,
	// 		'unit':'',
	// 		'price':2
	// 		},{
	// 		'name':'garlic salt',
	// 		'quantity':0.7,
	// 		'unit':'g',
	// 		'price':2
	// 		},{
	// 		'name':'Italian seasoning',
	// 		'quantity':0.6,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'dried oregano',
	// 		'quantity':0.3,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'crushed red pepper flakes',
	// 		'quantity':0.6,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'Worcestershire sauce',
	// 		'quantity':6,
	// 		'unit':'ml',
	// 		'price':7
	// 		},{
	// 		'name':'milk',
	// 		'quantity':20,
	// 		'unit':'ml',
	// 		'price':4
	// 		},{
	// 		'name':'grated Parmesan cheese',
	// 		'quantity':5,
	// 		'unit':'g',
	// 		'price':8
	// 		},{
	// 		'name':'seasoned bread crumbs',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':101,
	// 	'name':'MD 2',
	// 	'type':'main dish',
	// 	'image':'bakedbrie.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':1,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':10,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':102,
	// 	'name':'MD 3',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':2,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':10,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':5,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':103,
	// 	'name':'MD 4',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':1,
	// 		'unit':'pieces',
	// 		'price':4
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':12,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':6,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':200,
	// 	'name':'Chocolat Ice cream',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	},{
	// 	'id':201,
	// 	'name':'Vanilla Ice cream',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	},{
	// 	'id':202,
	// 	'name':'Strawberry',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	}
	// ];

}