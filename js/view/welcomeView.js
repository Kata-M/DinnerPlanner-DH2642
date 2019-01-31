var WelcomeView = function(welcomeContainer,model){
	
	this.createDinnerButton =  welcomeContainer.find("#createNewDinner");
	//console.log(createDinnerButton, "create dinner button ");

	this.update=function(model, changeDetails){
	    // redraw just the portion affected by the changeDetails
	    // or remove all graphics in the view, read the whole model and redraw 
	} 


	model.addObserver(this.update);

}