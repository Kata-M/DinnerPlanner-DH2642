var DishOverviewView = function (dishOverviewContainer, model) {
	

	var menu = model.getFullMenu();

	//needed buttons
	this.editDinner = dishOverviewContainer.find("#editDinner");
	this.printRecipe = dishOverviewContainer.find("#printRecipe");

	var showAllDishes = dishOverviewContainer.find("#showAllDishes");

	var allDishes = model.getFullMenu();
	var totalCost = model.getTotalMenuPrice();
	var dishCost = 0;
	var numberOfGuests = model.getNumberOfGuests();
	
	document.getElementById("showAllDishes").innerHTML += '<p> HELLLO I AM HERE KATA </p>'


	var populateOverview = function(){
		document.getElementById("people").innerHTML = numberOfGuests
		document.getElementById("showAllDishes").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'
		allDishes.forEach(function(dish){

			dishCost = model.getDishCost(dish);

			document.getElementById("showAllDishes").innerHTML += '<div class="col-sm-3" style="padding-bottom:10px">'+
			'<div class="col-item">'+'<div class="photo">'+'<img src="images/'+dish.image+
			'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+
			'<div class="price col-md-12">'+'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+
			'</div>'+'<div class="separator clear-left">'+
			'<i class="fa fa-list"></i><h5 class="price-text-color">'//+dishCost+
			+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
		});
		document.getElementById("showAllDishes").innerHTML += '</div>'+'</div>'
		document.getElementById("showAllDishes").innerHTML += '<div class="col-sm-12"><h3>Total Cost : '+totalCost+' SEK </h3></div>'
			
	
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