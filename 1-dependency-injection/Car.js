define('Car', function(){
    function Car(steeringWheel){
        this.steeringWheel = steeringWheel;
    }

    Car.prototype.getSteeringWheelColor = function getSteeringWheelColor(){
        return this.steeringWheel.color;
    }

    return Car;
});
