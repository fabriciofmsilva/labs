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

// Types:
// Assign the value to a variable uses an operator

// Categories:
// - Arithmetic
// - String
// - Logical
// - Object


// OPERATORS
// ------------------------------------------------------

// Types:
// - Unary
// - Binary
// - Ternary

// Categories:
// - Assignment
// - Comparison
// - Arithmetic
// - Bitwise
// - Logical
// - String
// - Special


// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------


// ARITHMETIC OPERATORS
// ------------------------------------------------------

// add ( + )

var add = 1 + 2;

// subtract ( - )

var subtract = 2 - 1;

// divide ( / )

var divide = 4 / 2;

// multiply ( * )

var multiply = 2 * 2;


// LOGICAL OPERATORS
// ------------------------------------------------------

// Equality Strict

var equality = 10 === 10;

var notEquality = 10 !== 10;

var diferent = '10' === 10


// Greater than

var greaterThan = 10 > 5;


// Greater than or equal to

var greaterThan = 10 >= 5;


// Less than

var lessThan = 5 < 10;


// Less than or equal to

var lessThan = 5 <= 10;


// SPECIAL OPERATORS
// ------------------------------------------------------

// Conditional operator
var status = (age >= 21) ? "adult" : "minor";

// Comma operator

// delete
delete obj.prop;

// in
var fruits = ['orange', 'apple', 'banana'];
if('banana' in fruits) {
  // execute something
}

// instanceof
var jsRelease = new Date(1995, 12, 17);
if (jsRelease instanceof Date) {
  // statements to execute
}

// new
var obj = new Obj;

// this
this.prop;
this['prop'];

// typeof
var fn = function(a,b) { return a + b; },
    str = "round",
    num = 1,
    date = new Date();

typeof fn
typeof str
typeof (date)
typeof (num)

// void - DO NOT USE IT!
void (expression)
void expression

// <a href="javascript:void(0)">Click here</a>
