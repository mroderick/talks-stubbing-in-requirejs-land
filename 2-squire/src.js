require([
    'Car'
], function(
    Car
){
    var car = new Car();
    console.log(car.getSteeringWheelColor()); // => black
});
