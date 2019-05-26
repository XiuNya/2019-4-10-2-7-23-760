module.exports = function main(inputs) {
    // write your code here...
    var flagDownFare=6;
    var tripFare=0.8;
    var flagFallDistance=2;
    var remoteDistance=8;
    var priceMakup=0.5;
    var waitingFare=0.25;
    function basePrice(distance) {
      if(distance<=flagFallDistance)
        return flagDownFare;
      if(distance>remoteDistance)
        return flagDownFare+(remoteDistance-flagFallDistance)*tripFare+(distance-remoteDistance)*(1+priceMakup)*tripFare;
      return flagDownFare+(distance-flagFallDistance)*tripFare;
    };
    function waitingPrice(parkTime) {
      return waitingFare*parkTime;
    };
    function totalPrice(basePrice,waitingPrice) {
      return Math.round(basePrice+waitingPrice);
    };

    var basePrice=basePrice(inputs.distance);
    var waitingPrice=waitingPrice(inputs.parkTime);
    var price=totalPrice(basePrice,waitingPrice);
    //return "price";
    return price;
};
