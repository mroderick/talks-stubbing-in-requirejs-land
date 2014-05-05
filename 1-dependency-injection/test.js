require([
    'Car'
], function(
    Car
){
    var fakeSteeringWheel = { color : 'blue' };
    var testCar = new Car(fakeSteeringWheel);

    console.log(testCar.getSteeringWheelColor()); // => blue
});
