var Car = function() {};

Car.prototype.honk = function() {
  console.log('honk honk');
};

var myCar1 = new Car();
var myCar2 = new Car();

Car.prototype.drive = function() {
  console.log('vrooom...');
};

myCar1.drive();
myCar2.drive();

console.log(myCar1.constructor);
console.log(myCar2.constructor);

myCar1.honk();
myCar2.honk();

Car.prototype.honk = function() {
  console.log('meep meep');
};

myCar1.honk();
myCar2.honk();

myCar2.honk = function() {
  console.log('honk honk');
};

myCar1.honk();
myCar2.honk();
