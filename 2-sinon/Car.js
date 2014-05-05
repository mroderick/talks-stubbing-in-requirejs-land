define('Car', ['SteeringWheel'], function(SteeringWheel){
    function Car(){
        this.steeringWheel = new SteeringWheel();
    }

    Car.prototype.getSteeringWheelColor = function getSteeringWheelColor(){
        return this.steeringWheel.getColor();
    }

    return Car;
});
