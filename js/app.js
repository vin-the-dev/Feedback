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
var secSlider1Value;
var secSlider2Value;


$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "SecondPageView", "SecondPageSadView", "ThirdPageView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

