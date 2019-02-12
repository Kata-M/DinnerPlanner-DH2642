var DishPrintoutView = function (dishPrintoutContainer, model) {

	this.editDinner2 = dishPrintoutContainer.find("#editDinner2");

	var peoplePrintout = dishPrintoutContainer.find("#peoplePrintout");
	var printOneDish = dishPrintoutContainer.find("#printOneDish");
	peoplePrintout.html(model.getNumberOfGuests());

	var menu = model.getFullMenu();

	
	var printOut = function(){

		printOneDish.empty();
		menu = model.getFullMenu();
		printOneDish.append( '<div class="container">');


		menu.forEach(function(menuItem)
		{
			var menuInstructions = menuItem.instructions;
			if(menuInstructions == null){
				menuInstructions = "Sorry, no description available for this dish ): "
			}

			printOneDish.append('<div class="row">'+
			'<div class="col-sm-3" style="padding-bottom:10px">'+
				'<div class="col-item" style="margin:30px">'+'<div class="photo">'+'<img src="'+menuItem.image+'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+
				'<div class="price col-md-12">'+'<h5>'+menuItem.title+'</h5>'+'<br/>'+'</div>'+
				'</div>'+'<div class="separator clear-left">'+
				'<i class="fa fa-list"></i><h5 class="price-text-color">'
				+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>' +

				'<div class="col-sm-4" style="padding:10px">'+
				
				'<h2>'+menuItem.title+'</h2>'+'<br/>'+
				'<p>'+ menuInstructions+ '</p>' +
				'</div>' +

				'<div class="col-sm-4" style="padding:10px">'+
				
				'<h4>'+"PREPARATION"+'</h4>'+'<br/>'+
				'<p>'+ menuInstructions+ '</p>' +
				'</div>' +
			'</div>');
		});	
		printOneDish.append('</div>');
	}

	printOut();
	

	this.update=function(){

		peoplePrintout.html(model.getNumberOfGuests());
		menu = model.getFullMenu();
		printOut();
	}

  
	model.addObserver(this.update);

}