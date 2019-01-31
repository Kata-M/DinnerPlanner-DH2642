var SidebarViewController = function(view,model,app){

	view.confirmDinner.click(function(){ 
		app.showdishOverviewView();
	});


	view.plusButton.click(function(){ 
			model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});
	view.minusButton.click(function(){ 
			model.setNumberOfGuests(model.getNumberOfGuests()-1);
	});


}