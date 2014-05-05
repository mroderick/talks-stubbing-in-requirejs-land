require([
    'SteeringWheel',
    'Car'
], function(
    SteeringWheel,
    Car
){
    var steeringWheel = new SteeringWheel();
    var car = new Car(steeringWheel);

    console.log('SRC - Steering Wheel color is: ', car.getSteeringWheelColor()); // => black
});
