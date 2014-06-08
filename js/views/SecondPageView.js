app.views.SecondPageView = Backbone.View.extend({

	initialize: function () {		
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    afterRender: function() {
        if(mainSliderValue>50){
        	$('#main-q').html('Glad to hear that, So did you enjoy your food?');
        }
        else{
        	$('#main-q').html('We are very sorry to hear that, was it the food?');        	
        }
    },

    events: {
        "input #main-slider": "handleSliderChange",
        "click #home-next-btn": "thirdPage",
        "click #home-prev-btn": "homePage"
    },

    handleSliderChange: function (e) {
        var rangeValue = $('#main-slider').val();
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
    },

    thirdPage: function (argument) {
        mainSliderValue = $('#main-slider').val();
        window.location.hash = "#thirdPage";
    },

    homePage: function (argument) {
    	window.location.hash = "#";
    }

});