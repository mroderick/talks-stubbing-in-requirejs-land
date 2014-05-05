require([
    'SteeringWheel',
    'Car'
], function(
    SteeringWheel,
    Car
){
    var steeringWheel = new SteeringWheel();
    var car = new Car(steeringWheel);

    console.log(car.getSteeringWheelColor()); // => black
});
