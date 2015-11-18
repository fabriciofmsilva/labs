'use strict';

function *addGenerator() {
  var i = 0;
  while(true) {
    i += yield i;
  }
}

var adder = addGenerator();
adder.next().value; // 0
adder.next(5).value; // 5
adder.next(5).value; // 10
adder.next(5).value; // 15
adder.next(50).value; // 65
