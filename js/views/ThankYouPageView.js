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
        "click #home-btn": "homePage"
    },

    homePage: function (argument) {
        $.post("http://vin.indusgs.co.uk/selectfeedback.php",
            {
                company : company,
                value1 : mainSliderValue,
                value2 : secSlider1Value,
                value3 : secSlider2Value,
                custEmail : custEmail,
                custPhone : custPhone,
                createdBy : employee
            });
        
        mainSliderValue = "";
        secSlider1Value = "";
        secSlider2Value = "";
        custEmail = "";
        custPhone = "";

        app.homeView = null;
        app.secondPageView = null;
        app.secondPageSadView = null;
        app.thirdPageView = null;

        window.location.hash = "#";
    }
});