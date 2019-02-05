var DishDetailsView = function (dishDetailsContainer, model, id) {

	 
	var numGuests = model.getNumberOfGuests();
	var dishDetails = dishDetailsContainer.find("#dishDetails");	
	var fetchIngredients = dishDetailsContainer.find("#fetchIngredients");
	var ID;	

	var loadDishDetails = (id) => {

		this.id = id ;
		ID = id;

		var dish = model.getDish(id);
		document.getElementById("dishDetails").innerHTML = '<h2 style="text-align: left">'+dish.name+'</h2><br/>'+'<img src="images\\'+dish.image+'" alt="food" style="width:50%; margin-bottom:20px"/>'+'<p>'+dish.description+'</p>'+
		//'<button id= "backToSearch" class="btn center-block buttonclr">Back to search</button>'+
		'<br/><br/>'+
		'<h2 style="text-align: left">PREPARATION</h2>'+'<p>'+dish.description+'</p>'
		
		var ingredients = model.getIngredientsforDish(id);
		console.log(ingredients);

		//fetchIngredients.append($("<table id='ingredientTable' class='table table-sm'></table>"));
		document.getElementById("fetchIngredients").innerHTML = '<table id="ingredientTable" class="table table-sm">'

		var ingredientTable = fetchIngredients.find("#ingredientTable");
		
		ingredientTable.append($("<tr id='totalGuests'></tr>"));
		var totalGuestRow = ingredientTable.find("#totalGuests");
		totalGuestRow.append($("<td style=' font-weight: bold '> INGREDIENTS FOR "+numGuests+"</td>"));

		var i = 0;	
		var totalPrice = 0;
		ingredients.forEach(function(ingredient)
		{
			ingredientTable.append($("<tr id='"+i+"'></tr>"));
			var row = ingredientTable.find("#"+i);

			row.append($("<td>"+ingredient.quantity+ingredient.unit+ "</td>"));
			row.append($("<td>"+ingredient.name+"</td>"));
			row.append($("<td>SEK</td>"));
			row.append($("<td>"+ingredient.price*numGuests+"</td>"));
			totalPrice += ingredient.price*numGuests;
			i++;							
		});	
		ingredientTable.append($("<tr id='totalPrice'></tr>"));
		var totalPriceRow = ingredientTable.find("#totalPrice");
		totalPriceRow.append($("<td style=' font-weight: bold '> Total Price "+totalPrice+"</td>"));

		document.getElementById("fetchIngredients").innerHTML += '</table>'
	}	

	//loadDishDetails(id);
	this.loadDishDetails = loadDishDetails;

	this.backToSearchButton = dishDetailsContainer.find("#backToSearch");
	this.addToMenuButton = dishDetailsContainer.find("#addToMenu");

	this.update=function(){
				numGuests = model.getNumberOfGuests();

				var parentTable = document.getElementById("fetchIngredients");
				var childTable = document.getElementById("ingredientTable");
				parentTable.removeChild(childTable);

				loadDishDetails(ID);
	}
  
	model.addObserver(this.update);

}
 
