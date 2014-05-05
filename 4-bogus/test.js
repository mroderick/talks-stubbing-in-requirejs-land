setTimeout(function(){
    require(['../bower_components/bogus/bogus'], function(bogus){

        bogus.stub('SteeringWheel', function SteeringWheel(){
            this.color = 'red'
        });

        bogus.requireWithStubs('Car', function(Car){
            var testCar = new Car();

            console.log(
                'TEST - Steering Wheel color is: ',
                testCar.getSteeringWheelColor()
            ); // => red
        });
    });
}, 50);
