var SidebarView = function(sidebarContainer,model){

	
	this.numberOfGuests = sidebarContainer.find("#numberOfGuests");
	this.confirmDinner = sidebarContainer.find("#confirmDinner");
	this.plusButton = sidebarContainer.find("#plus");
	this.minusButton = sidebarContainer.find("#minus");

	var numGuests = model.getNumberOfGuests();
  	document.getElementById("guests").innerHTML = numGuests; 

  	this.update=function(model){
	    // redraw just the portion affected by the changeDetails
	    // or remove all graphics in the view, read the whole model and redraw 
	    var numGuests = model.getNumberOfGuests();
	  	document.getElementById("guests").innerHTML = numGuests;
	}

	model.addObserver(this.update);
}