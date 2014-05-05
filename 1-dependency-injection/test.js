setTimeout(function(){
    require(['Car'], function(Car){
        var fakeSteeringWheel = { color : 'blue' };
        var testCar = new Car(fakeSteeringWheel);

        console.log(
            'TEST - Steering Wheel color is: ',
            testCar.getSteeringWheelColor()
        ); // => blue
    });
}, 50);
