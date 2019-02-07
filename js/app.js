$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var container = $("#exampleView");
	var welcomeContainer = $("#welcomeView");
	var welcomeView = new WelcomeView(welcomeContainer,model);
	var welcomeViewController = new WelcomeViewController(welcomeView,model,this);

	var sidebarContainer = $("#sidebarView");
	var sidebarView = new SidebarView(sidebarContainer,model);
	var sidebarViewController = new SidebarViewController(sidebarView,model,this);

	var findDishContainer = $("#findDishView");
	var findDishView = new FindDishView(findDishContainer,model);
	var findDishViewController = new FindDishViewController(findDishView,model,this);

	var dishDetailsContainer = $("#dishDetailsView");
	var dishDetailsView = new DishDetailsView(dishDetailsContainer,model);
	var dishDetailsViewController = new DishDetailsViewController(dishDetailsView,model,this);

	var dishOverviewViewContainer = $("#dishOverviewView");
	var dishOverviewView = new DishOverviewView(dishOverviewViewContainer,model);
	var dishOverviewViewController = new DishOverviewViewController(dishOverviewView,model,this);

	var dishPrintoutViewContainer = $("#dishPrintoutView");
	var dishPrintoutView = new DishPrintoutView(dishPrintoutViewContainer,model);
	var dishPrintoutViewController = new DishPrintoutViewController(dishPrintoutView,model,this);


	var hideAllViews = function(){
		$("#welcomeView").hide();
		$("#sidebarView").hide();
		$("#dishOverviewView").hide();
		$("#findDishView").hide();
		$("#dishPrintoutView").hide();
		$("#dishDetailsView").hide();


	}
	
	this.showSelectDishScreen = function(){
		hideAllViews();
  		$("#sidebarView").show();
  		$("#findDishView").show();
  	}


  	this.showDishDetails = function(id){
  		hideAllViews();
  		$("#sidebarView").show();
  		$("#dishDetailsView").show();
  		dishDetailsView.loadDishDetails(id);
  	}

  	this.showdishOverviewView = function(){
  		hideAllViews();
  		$("#dishOverviewView").show();

  	}


  	this.showdisPrintoutView = function(){
  		hideAllViews();
  		$("#dishPrintoutView").show();
  	}

  	this.showSpinner = function(){
  		$("#spinner").show();
  	}
  	this.hideSpinner = function(){
  		$("#spinner").hide();
  	}



});
	