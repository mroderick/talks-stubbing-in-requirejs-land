require([
    'Car'
], function(
    Car
){
    var car = new Car();

    console.log('SRC - Steering Wheel color is: ', car.getSteeringWheelColor()); // => black
});
