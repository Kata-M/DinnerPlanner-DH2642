var FindDishViewController = function(view,model,app){	

	view.searchButton.click(function(event){ 
		event.preventDefault();
		view.showThumbnails();
	});


    view.filterButton.on('click', '.dishItem', function(){ 
        
       let id = $(this).attr('id'); 
       app.showDishDetails(id);
     
    });


}