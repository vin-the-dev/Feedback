app.views.HomeView = Backbone.View.extend({

    initialize: function () {
        this.searchResults = new app.models.EmployeeCollection();
        this.searchresultsView = new app.views.EmployeeListView({model: this.searchResults});
    },

    render: function () {
        this.$el.html(this.template());
        $('.scroller', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "input #main-slider": "handleSliderChange",
        "click #home-next-btn": "secondPage"
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

    secondPage: function (argument) {
        mainSliderValue = $('#main-slider').val();
        if(mainSliderValue>45)
            window.location.hash = "#secondPage";
        else
            window.location.hash = "#secondPageSad";
    }

});
