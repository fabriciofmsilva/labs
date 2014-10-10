'use strict';

// ------------------------------------------------------
// TABLE OF CONTENTS
// ------------------------------------------------------
// 1 - GENERAL NOTES
// 2 - STEP BY STEP
// 3 - GENERAL GUIDE
// 4 - COMMON PROBLEMS
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------


// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------

class Car {

}


class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

let car = new Car('Chevrolet', 'Camaro SS');
console.log('Your car is a ' + car.brand + ' model: ' + car.model);


class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  mostraInfo() {
    console.log('Your car is a ' + this.brand + ' model: ' + this.model);
  }
}

let car = new Car('Chevrolet', 'Camaro SS');
car.mostraInfo();


class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class MustangGT extends Car {
  constructor(brand, model, history) {
    super.constructor(brand, model);
    this.history = history;
  }
}

class Camaro extends Car {
  constructor(brand, model, music) {
    super.constructor(brand, model);
    this.music = music;
  }
}
