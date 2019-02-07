var FindDishView = function(findDishContainer,model){

	
	this.searchButton = findDishContainer.find("#search");

	/* search types and populate the screen dynamicly */
	this.selectType = findDishContainer.find("#selectType");
	this.searchInput = findDishContainer.find("#searchInput");
	
	var types = model.getAllTypes();
	document.getElementById("selectType").innerHTML += '<option value= "all"> all </option>'	
	types.forEach(function(type){
		document.getElementById("selectType").innerHTML += '<option value="'+type+'">'+ type +'</option>'	
	});


	//first time load "all" filter type and all dishes

	$(window).load(function() {
		$("#dishesLoading").show();
	});
	model.getAllDishes("all")
			.then(dishes => {

					$("#dishesLoading").hide();

					document.getElementById("filtered").innerHTML += '<div class="container">'+'<div class="row" style="margin-top:30px">'
					dishes.forEach(function(dish){
				
							document.getElementById("filtered").innerHTML += 
							'<div id="'+dish.id+'"class="col-sm-3 dishItem" style="padding-bottom:10px">'+
							'<div class="col-item">'+'<div class="photo">'+
							'<img src="https://spoonacular.com/recipeImages/'+dish.image+'" class="img-responsive" alt="a" />'+
							'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
							'<h5>'+dish.title+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
							'<i class="fa fa-list"></i><h5 class="price-text-color">'
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

		var type = document.getElementById("selectType").value;
		var searchKeyword = document.getElementById("searchInput").value;
		 
		model.getAllDishes(type,searchKeyword)
		.then(dishes => {
			document.getElementById("filtered").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'

			dishes.forEach(function(dish){
				
				
				document.getElementById("filtered").innerHTML += 
				'<div id="'+dish.id+ '"class="col-sm-3 dishItem" style="padding-bottom:10px">'+
				'<div class="col-item">'+'<div class="photo">'+
				'<img src="https://spoonacular.com/recipeImages/'+dish.image+'" class="img-responsive" alt="a" />'+
				'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
				'<h5>'+dish.title+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
				'<i class="fa fa-list"></i><h5 class="price-text-color">'
				+'</h5>'+'</div>'+
				'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
			});
			document.getElementById("filtered").innerHTML += '</div>'+'</div>'

		}).catch( error => {
			alert("Error in the network connection! ):");
			console.log(error);
	   });
	}


	this.dishItem = findDishContainer.find("#dishItem");

	/* poplulate pictures based on what filter is on */
	this.filterButton = findDishContainer.find("#filtered");

}