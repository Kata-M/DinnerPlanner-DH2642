var SidebarView = function(sidebarContainer,model){

	
	var numberOfGuests = sidebarContainer.find("#guests");
	this.confirmDinner = sidebarContainer.find("#confirmDinner");
	this.plusButton = sidebarContainer.find("#plus");
	this.minusButton = sidebarContainer.find("#minus");

	var menu = sidebarContainer.find("#menu");



	var numGuests = model.getNumberOfGuests();
  	numberOfGuests.html(numGuests); 

  	var totalCost = model.getTotalMenuPrice();

  	var populateMenuView = function(){
  		menu.empty();
		var allMenu = model.getFullMenu();

		menu.append('<thead>'+ 
                      '<tr>' +  
                        '<th>Dish Name</th>' + 
                        '<th align="left">Cost</th>' + 
                      '</tr>' + 
            '</thead>' +
            '<tbody>'); 
				console.log(menu);

			console.log(model.getFullMenu());  

			allMenu.forEach(function(menuItem){

				var menuItemName = menuItem.title;
				console.log("menuItemName", menuItemName);
				var menuItemCost = model.getDishCost(menuItem)*model.getNumberOfGuests();
				

				
				menu.append(
				'<tr id="menuItem'+menuItemName+'">'+
					'<th scope="row" id="1dish">'+menuItemName+'</th>' +
					'<td id="1price"><span id="1dish_price">'+ menuItemCost + ' kr </span></td>' +
				'</tr>');
			});
			

			totalCost = model.getTotalMenuPrice();
			
			menu.append(
			'<tr id="menuCost">'+
				'<th scope="row" id="1dish">'+"TOTAL COST"+'</th>' +
				'<td id="1price"><span id="1dish_price">'+ totalCost + ' kr </span></td>' +
			'</tr>');

			menu.append('</tbody>');
	}

  	populateMenuView();

  	this.update=function(){
	    // redraw just the portion affected by the changeDetails
	    // or remove all graphics in the view, read the whole model and redraw 

			numGuests = model.getNumberOfGuests();

	  		numberOfGuests.html(numGuests);

		  	populateMenuView();
	}


	model.addObserver(this.update);

}