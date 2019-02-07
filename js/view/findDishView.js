var FindDishView = function(findDishContainer,model){

	
	this.searchButton = findDishContainer.find("#search");

	/* search types and populate the screen dynamicly */
	this.selectType = findDishContainer.find("#selectType");
	this.searchInput = findDishContainer.find("#searchInput");

	this.spinner = findDishContainer.find("#spinner");
	
	var types = model.getAllTypes();
	document.getElementById("selectType").innerHTML += '<option value= "all"> all </option>'	
	types.forEach(function(type){
		document.getElementById("selectType").innerHTML += '<option value="'+type+'">'+ type +'</option>'	
	});


	//first time load "all" filter type and all dishes
	var dishCost = 0;
	//var allDishes = model.getAllDishes("all");
	var allDishes = model.getAllDishes("all")
			.then(dishes => {



					//Throws an Error due to time out 
					// var SOME_API_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";
					// var API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";
					// var IMAGE = dish.image;

					// var getURL = fetch(SOME_API_URL,{ 
					// 	headers:{   
					// 		'X-Mashape-Key': API_KEY
					// 	},	 
					// 	paramas:{   
					// 		  'query': IMAGE
					// 	}  
					// }).then(response => response.json())
					// 	  .then(data => data.results)

					document.getElementById("filtered").innerHTML += '<div class="container">'+'<div class="row" style="margin-top:30px">'
					dishes.forEach(function(dish){
							
							//dishCost = model.getDishCost(dish);
								
							document.getElementById("filtered").innerHTML += 
							'<div id="'+dish.id+'"class="col-sm-3 dishItem" style="padding-bottom:10px">'+
							//'<div class="col-sm-3 dishItem" style="padding-bottom:10px">'+
							'<div class="col-item">'+'<div class="photo">'+
							'<img src="https://spoonacular.com/recipeImages/'+dish.image+'" class="img-responsive" alt="a" />'+
							'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
							'<h5>'+dish.title+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
							'<i class="fa fa-list"></i><h5 class="price-text-color">'//+dishCost+
							+'</h5>'+'</div>'+
							'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
					});
					document.getElementById("filtered").innerHTML += '</div>'+'</div>'

			}).catch( error => {
     		alert("Error in the network connection! ):");
     		console.log(error);
			});
		


	//show filtered dishes when filter type is changed
	this.showThumbnails = function(){

		var dishCost = 0;

		var type = document.getElementById("selectType").value;
		var searchKeyword = document.getElementById("searchInput").value;
		 
		//var allDishes = 
		model.getAllDishes(type,searchKeyword)
		.then(dishes => {
		
			document.getElementById("filtered").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'
			dishes.forEach(function(dish){
				
				//dishCost = model.getDishCost(dish);
				
				document.getElementById("filtered").innerHTML += 
				'<div id="'+dish.id+ '"class="col-sm-3 dishItem" style="padding-bottom:10px">'+
				//'<div class="col-sm-3 dishItem" style="padding-bottom:10px">'+
				'<div class="col-item">'+'<div class="photo">'+
				'<img src="https://spoonacular.com/recipeImages/'+dish.image+'" class="img-responsive" alt="a" />'+
				'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
				'<h5>'+dish.title+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
				'<i class="fa fa-list"></i><h5 class="price-text-color">'//+dishCost+
				+'</h5>'+'</div>'+
				'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
			});
			document.getElementById("filtered").innerHTML += '</div>'+'</div>'
			//$("#findDishView").reload();
		}).catch( error => {
     		alert("Error in the network connection! ):");
     		console.log(error);
		});
	}


	this.dishItem = findDishContainer.find("#dishItem");

	/* poplulate pictures based on what filter is on */
	this.filterButton = findDishContainer.find("#filtered");
	
	//the value in filter field
	//var filteredDishes = model.getAllDishes(type);
	//var type = document.getElementById("selectType").value;
	//var searchKeyword = document.getElementById("searchInput").value;


	//filteredDishes.forEach(function(filteredDish){
		//document.getElementById("filter").innerHTML += '<option value="'+filteredDish+'">'+ filteredDish +'</option>'	
	//});

	/** RE-POPULATE THE THUMPNAILS **/

}