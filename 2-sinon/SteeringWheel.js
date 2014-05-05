define('SteeringWheel', function(){
    function SteeringWheel(){
        this.color = 'black';
    }

    SteeringWheel.prototype.getColor = function getColor(){
        return this.color;
    }

    return SteeringWheel;
});

