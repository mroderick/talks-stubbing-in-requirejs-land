setTimeout(function(){
    require(['SteeringWheel', 'Car'], function(SteeringWheel, Car){
        sinon.stub(SteeringWheel.prototype, 'getColor', function(){
            return 'yellow';
        });
        var testCar = new Car();

        console.log(
            'TEST - Steering Wheel color is: ',
            testCar.getSteeringWheelColor()
        ); // => yellow
    });
}, 50);
