/**
 * Demo App for TopcoatTouch
 */
$(document).ready(function() {


    // Create the topcoatTouch object
    var tt = new TopcoatTouch();

    // First page we go to home...  This could be done in code by setting the class to 'page page-center', but here is how to do it in code...

    $('#home-next-btn').click(function() {
        // toDoService.addToDo($('#nameInput').val(), $('#detailsTextarea').val(), $('#dueDateInput').val());
        // toDoService.save();
        // createToDoList();
        tt.goTo('#details');
    });

    tt.goTo('home');



});

function showVal (rangeValue) {
	$('#mainsmiley').removeClass();
	$('#mainsmiley').addClass('all-center')
	if(rangeValue<15)
	{
		$('#mainsmiley').addClass('angry');
		// $('#mainrangeslider').val(0);	
	}
	else if(rangeValue<45)
	{	
		$('#mainsmiley').addClass('sad');
		// $('#mainrangeslider').val(25);
	}
	else if(rangeValue<75)
	{	
		$('#mainsmiley').addClass('neutral');
		// $('#mainrangeslider').val(50);
	}
	else if(rangeValue<85)
	{	
		$('#mainsmiley').addClass('smiley');
		// $('#mainrangeslider').val(75);
	}
	else 
	{
		$('#mainsmiley').addClass('happy');
		// $('#mainrangeslider').val(100);
	}
}