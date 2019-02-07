var DishDetailsView = function (dishDetailsContainer, model, id) {

	 
	var numGuests = model.getNumberOfGuests();
	var dishDetails = dishDetailsContainer.find("#dishDetails");	
	var fetchIngredients = dishDetailsContainer.find("#fetchIngredients");
	var ID;	

	var loadDishDetails = (id) => {

		this.id = id ;
		ID = id;
		$(window).load(function() {
			$("#dishDetailsLoading").show();
		});
		var eachDish = model.getDish(id)
		.then(dish => {
			$("#dishDetailsLoading").hide();

			console.log(dish);
			var dishInstructions = dish.instructions;
			if(dishInstructions == null){
				dishInstructions = "Sorry, no description available for this dish ): "
			}
			
			document.getElementById("dishDetails").innerHTML = '<h2 style="text-align: left">'+dish.title+'</h2><br/>'+'<img src="'+dish.image+'" alt="food" style="width:50%; margin-bottom:20px"/>'+'<p>'+dishInstructions+'</p>'+
			'<br/><br/>'+
			'<h2 style="text-align: left">PREPARATION</h2>'+'<p>'+dishInstructions+'</p>'
			
			var ingredients = dish.extendedIngredients ;

			console.log(ingredients);

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

				row.append($("<td>"+ingredient.measures.metric.amount+ingredient.measures.metric.unitShort+ "</td>"));
				row.append($("<td>"+ingredient.originalName+"</td>"));
				row.append($("<td>"+1*numGuests+"</td>"));
				row.append($("<td>SEK</td>"));
				totalPrice += numGuests;
				i++;							
			});	
			ingredientTable.append($("<tr id='totalPrice'></tr>"));
			var totalPriceRow = ingredientTable.find("#totalPrice");
			totalPriceRow.append($("<td style=' font-weight: bold '> Total Price "+totalPrice+"</td>"));

			document.getElementById("fetchIngredients").innerHTML += '</table>'

		}).catch( error => {
			alert("Error in the network connection! ):");
			console.log(error);
	   });
		
	}	
			

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
 
