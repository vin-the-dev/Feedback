app.views.ThankYouPageView = Backbone.View.extend({

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
        "click #home-next-btn": "thirdPage",
        "click #home-prev-btn": "backPage"
    },

    thirdPage: function (argument) {
        window.location.hash = "#thirdPage";
    },

    backPage: function (argument) {
    	if(mainSliderValue>45)
            window.location.hash = "#secondPage";
        else
            window.location.hash = "#secondPageSad";
    }

});