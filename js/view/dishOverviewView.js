/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var DishOverviewView = function (dishOverviewContainer, model) {
	
	//fetch all dishes and create View
	var showAllDishes = dishOverviewContainer.find("#showAllDishes");
	var allDishes = model.getReallyAllDishes();
	var totalCost = model.getTotalMenuPrice();
	var dishCost = 0;

	document.getElementById("showAllDishes").innerHTML += '<div class="container">'+'<div class="row" style="margin-top:30px">'
	allDishes.forEach(function(dish){

		dishCost = model.getDishCost(dish);

		document.getElementById("showAllDishes").innerHTML += '<div class="col-sm-3" style="padding-bottom:10px">'+'<div class="col-item">'+'<div class="photo">'+'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
	});
	document.getElementById("showAllDishes").innerHTML += '</div>'+'</div>'
	document.getElementById("showAllDishes").innerHTML += '<div class="col-sm-12"><h3>Total Cost : $'+totalCost+'</h3></div>'

}