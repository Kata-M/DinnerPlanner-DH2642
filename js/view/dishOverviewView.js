var DishOverviewView = function (dishOverviewContainer, model) {
	

	var menu = model.getFullMenu();

	//needed buttons
	this.editDinner = dishOverviewContainer.find("#editDinner");
	this.printRecipe = dishOverviewContainer.find("#printRecipe");
	var people = dishOverviewContainer.find("#people");
	var showAllDishes = dishOverviewContainer.find("#showAllDishes");

	var allDishes = model.getFullMenu();
	var totalCost = model.getTotalMenuPrice();
	var dishCost = 0;
	var numberOfGuests = model.getNumberOfGuests();


	var populateOverview = function(){
		people.empty();
		people.append(numberOfGuests);
		showAllDishes.empty();
		showAllDishes.append('<div class="container">'+'<div class="row" style="margin-top:30px">');
		allDishes.forEach(function(dish){

			dishCost = model.getDishCost(dish);

			showAllDishes.append('<div class="col-sm-3" style="padding-bottom:10px">'+
			'<div class="col-item">'+'<div class="photo">'+'<img src="'+dish.image+'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+
			'<div class="price col-md-12">'+'<h5>'+dish.title+'</h5>'+'<br/>'+'</div>'+
			'</div>'+'<div class="separator clear-left">'+
			'<i class="fa fa-list"></i><h5 class="price-text-color">'
			+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>')		
		});
		showAllDishes.append('</div>'+'</div>')
		showAllDishes.append('<div class="col-sm-12"><h3>Total Cost : '+totalCost+' SEK </h3></div>')
			
	
	}

	populateOverview();

	this.update=function(model){
		 allDishes = model.getFullMenu();
		 totalCost = model.getTotalMenuPrice();
		 dishCost = 0;
		 numberOfGuests = model.getNumberOfGuests();
	     populateOverview();
	}

	model.addObserver(this.update);


}