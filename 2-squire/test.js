// testing with Squire
require(['../bower_components/squire/src/Squire.js'], function(Squire){
    var injector = new Squire();

    injector.mock('SteeringWheel', function(){
        this.color = 'green'
    });

    injector.require(['Car'], function(Car){
        var testCar = new Car();
        console.log(testCar.getSteeringWheelColor()); // => green
    });
});
