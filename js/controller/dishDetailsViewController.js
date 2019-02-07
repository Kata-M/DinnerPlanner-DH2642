var DishDetailsViewController = function(view, model, app) {
    
  view.backToSearchButton.click(function(){ 
		app.showSelectDishScreen();
	});  


  view.addToMenuButton.click(function(){ 
		console.log("ids in view",view.id);
		model.addDishToMenu(view.id);
	});  

}