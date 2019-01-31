var FindDishView = function(findDishContainer,model){

	
	this.searchButton = findDishContainer.find("#search");
	
	


  	//UPDATE 	FUNCTION 	FOR 	THIS 	VIEW
  	this.update=function(model){
	    // redraw just the portion affected by the changeDetails
	    // or remove all graphics in the view, read the whole model and redraw 
	
	}

	/*
	 * Search Types
	*/
	/*
	var types = model.getAllTypes();
	//totalPrice.append($(total));
	console.log("types : ",types);
	var n = 0;
	types.forEach(function(type)
		{
			document.getElementById("type"+n).innerHTML = type;
			n++;
		});
	*/
	/* search types and populate the screen dynamicly */
	this.searchType = findDishContainer.find("#selectType");
	var types = model.getAllTypes();
	document.getElementById("selectType").innerHTML += '<option value= "all"> all </option>'	
	types.forEach(function(type){
		document.getElementById("selectType").innerHTML += '<option value="'+type+'">'+ type +'</option>'	
	});

	//stuff from sindhu

	//var showDishes = dishSearchContainer.find("#filtered");
		var dishCost = 0;

		//var filterValue = document.getElementById("selectType").value;
		//var filterValue = "";
	 	var allDishes = model.getAllDishes("all");
	 	console.log(filterValue);
		
		document.getElementById("filtered").innerHTML += '<div class="container">'+'<div class="row" style="margin-top:30px">'
		allDishes.forEach(function(dish){
			
			dishCost = model.getDishCost(dish);
			
			document.getElementById("filtered").innerHTML += 
			'<div id="dishItem" class="col-sm-3 " style="padding-bottom:10px">'+
			'<div class="col-item">'+'<div class="photo">'+
			'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+
			'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
			'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
			'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+
			'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
		});
		document.getElementById("filtered").innerHTML += '</div>'+'</div>'


	this.showThumbnails = function(){
		//$("#findDishView").empty();
		var dishCost = 0;

		var filterValue = document.getElementById("selectType").value;
		//var filterValue = "starter";
	 	var allDishes = model.getAllDishes(filterValue);
	 	console.log(filterValue);
		
		document.getElementById("filtered").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'
		allDishes.forEach(function(dish){
			
			dishCost = model.getDishCost(dish);
			
			document.getElementById("filtered").innerHTML += 
			'<div id="dishItem" class="col-sm-3" style="padding-bottom:10px">'+
			'<div class="col-item">'+'<div class="photo">'+
			'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+
			'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
			'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
			'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+
			'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
		});
		document.getElementById("filtered").innerHTML += '</div>'+'</div>'
		//$("#findDishView").reload();
	}


	this.dishItem = findDishContainer.find("#dishItem");




	/* poplulate pictures based on what filter is on */
	this.filterButton = findDishContainer.find("#filtered");
	
	//the value in filter field
	var filterValue = document.getElementById("selectType").value;
	console.log("filter value : ",filterValue);

	var filteredDishes = model.getAllDishes(filterValue);

	//filteredDishes.forEach(function(filteredDish){
		//document.getElementById("filter").innerHTML += '<option value="'+filteredDish+'">'+ filteredDish +'</option>'	
	//});

	/** RE-POPULATE THE THUMPNAILS **/



	//ATTACH THE OBSERVER TO THE MODEL
	model.addObserver(this.update);
}