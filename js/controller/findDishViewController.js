var FindDishViewController = function(view,model,app){	

	view.searchButton.click(function(event){ 
		event.preventDefault();
		view.showThumbnails();
	});

	view.filterButton.click(function(){
		alert("FILTER ");
	});

	view.dishItem.click( function(){
		app.showDishDetails();
	});


}