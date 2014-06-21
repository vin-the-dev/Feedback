app.views.SecondPageSadView = Backbone.View.extend({

	initialize: function () {
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    // afterRender: function() {
    //     if(mainSliderValue>50){
    //     	$('#main-q').html('Glad to hear that, So did you enjoy your food?');
    //     }
    //     else{
    //     	$('#main-q').html('We are very sorry to hear that, was it the food?');        	
    //     }
    // },

    events: {
        "input #sec-slider-1": "handleSliderChange1",
        "input #sec-slider-2": "handleSliderChange2",
        "click #home-next-btn": "thirdPage",
        "click #home-prev-btn": "homePage"
    },

    handleSliderChange1: function (e) {
        var rangeValue = $('#sec-slider-1').val();
        $('#sec-smiley-1').removeClass();
        $('#sec-smiley-1').addClass('all-center')
        if(rangeValue<15)
        {
            $('#sec-smiley-1').addClass('angry');
            // $('#mainrangeslider').val(0);    
        }
        else if(rangeValue<45)
        {   
            $('#sec-smiley-1').addClass('sad');
            // $('#mainrangeslider').val(25);
        }
        else if(rangeValue<75)
        {   
            $('#sec-smiley-1').addClass('neutral');
            // $('#mainrangeslider').val(50);
        }
        else if(rangeValue<85)
        {   
            $('#sec-smiley-1').addClass('smiley');
            // $('#mainrangeslider').val(75);
        }
        else 
        {
            $('#sec-smiley-1').addClass('happy');
            // $('#mainrangeslider').val(100);
        }
    },

    handleSliderChange2: function (e) {
        var rangeValue = $('#sec-slider-2').val();
        $('#sec-smiley-2').removeClass();
        $('#sec-smiley-2').addClass('all-center')
        if(rangeValue<15)
        {
            $('#sec-smiley-2').addClass('angry');
            // $('#mainrangeslider').val(0);    
        }
        else if(rangeValue<45)
        {   
            $('#sec-smiley-2').addClass('sad');
            // $('#mainrangeslider').val(25);
        }
        else if(rangeValue<75)
        {   
            $('#sec-smiley-2').addClass('neutral');
            // $('#mainrangeslider').val(50);
        }
        else if(rangeValue<85)
        {   
            $('#sec-smiley-2').addClass('smiley');
            // $('#mainrangeslider').val(75);
        }
        else 
        {
            $('#sec-smiley-2').addClass('happy');
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