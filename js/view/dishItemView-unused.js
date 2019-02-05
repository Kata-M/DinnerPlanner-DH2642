var DishItemView = function (dishItemContainer, model) {
	
	//fetch all dishes and create View
	var showDishItem = dishItemContainer.find("#showDishItem");
	var allDishes = model.getReallyAllDishes();
	var totalCost = model.getTotalMenuPrice();
	var dishCost = 0;

	document.getElementById("showDishItem").innerHTML += '<div class="container">'+'<div class="row" style="margin-top:30px">'
	allDishes.forEach(function(dish){

		dishCost = model.getDishCost(dish);

		document.getElementById("showDishItem").innerHTML += '<div class="col-sm-3" style="padding-bottom:10px">'+'<div class="col-item">'+'<div class="photo">'+'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
	});
	document.getElementById("showDishItem").innerHTML += '</div>'+'</div>'
	document.getElementById("showDishItem").innerHTML += '<div class="col-sm-12"><h3>Total Cost : $'+totalCost+'</h3></div>'

}
 
