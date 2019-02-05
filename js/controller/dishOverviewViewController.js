var DishOverviewViewController = function(view,model,app){

	view.editDinner.click(function(){ 
		app.showSelectDishScreen();
	});

	view.printRecipe.click(function(){ 
		app.showdisPrintoutView();
	});

}