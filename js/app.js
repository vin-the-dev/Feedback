var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

window.onload=function(){
    window.location.hash = "#";
};

var mainSliderValue;

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "SecondPageView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

