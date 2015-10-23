var Vehicle = function() {};

Vehicle.prototype.drive = function() {
  console.log('vrooom...');
};

var Car = function() {};

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
  console.log('honk honk');
};

var Bike = function() {};

Bike.prototype = new Vehicle();

Bike.prototype.ring = function() {
  console.log('ring ring');
};

var myCar = new Car();

myCar.honk();
myCar.drive();

var myBike = new Bike();

myBike.ring();
myBike.drive();
