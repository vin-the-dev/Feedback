app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
        "secondPage":               "secondPage",
        "secondPageSad":            "secondPageSad",
        "thirdPage":                "thirdPage",
        "thankYouPage":             "thankYouPage",
        "employees/:id":            "employeeDetails",
        "employees/:id/reports":    "reports",
        "employees/:id/map":        "map"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

    secondPage: function (argument) {
        if (!app.secondPageView) {
            app.secondPageView = new app.views.SecondPageView();
            app.secondPageView.render();
        } else {
            console.log('reusing second page view');
            app.secondPageView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.secondPageView.$el);
    },

    secondPageSad: function (argument) {
        if (!app.secondPageSadView) {
            app.secondPageSadView = new app.views.SecondPageSadView();
            app.secondPageSadView.render();
        } else {
            console.log('reusing second page sad view');
            app.secondPageSadView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.secondPageSadView.$el);
    },

    thirdPage: function (argument) {
        if (!app.thirdPageView) {
            app.thirdPageView = new app.views.ThirdPageView();
            app.thirdPageView.render();
        } else {
            console.log('reusing third page view');
            app.thirdPageView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.thirdPageView.$el);
    },

    thankYouPage: function (argument) {
        if (!app.thankYouPageView) {
            app.thankYouPageView = new app.views.ThankYouPageView();
            app.thankYouPageView.render();
        } else {
            console.log('reusing third page view');
            app.thankYouPageView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.thankYouPageView.$el);
    },

    employeeDetails: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
            }
        });
    },

    reports: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    }

});