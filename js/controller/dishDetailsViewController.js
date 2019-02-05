var DishDetailsViewController = function(view, model, app) {
    
  view.backToSearchButton.click(function(){ 
		app.showSelectDishScreen();
		// here shoul clear the id from dish details view
	});  


  view.addToMenuButton.click(function(){ 
		console.log("ids in view",view.id);
		model.addDishToMenu(view.id);
	});  

}