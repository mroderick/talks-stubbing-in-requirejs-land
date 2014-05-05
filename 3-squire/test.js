setTimeout(function(){
    require(['../bower_components/squire/src/Squire.js'], function(Squire){
        var injector = new Squire();

        injector.mock('SteeringWheel', function(){
            this.color = 'green'
        });

        injector.require(['Car'], function(Car){
            var testCar = new Car();
            console.log('TEST - Steering Wheel color is: ', testCar.getSteeringWheelColor()); // => green
        });
    });
}, 50);
