// 1.1. Differentiating Between a JavaScript Object, Primitive, and Literal

// Literal
"this is a string"
1.45
true

// Primitive
"this is a string"
null

var str1 = "this is a string";
// using String object's length property
console.log(str1.length);


var str1 = "this is a simple string"; // the quoted string is the literal
var num1 = 1.45; // the value of 1.45 is the literal
var answer = true; // the values of true and false are boolean literals


var str1 = String("this is a simple string"); // primitive string
var num1 = Number(1.45); // primitive number
var bool1 = Boolean(true); // primitive boolean


var str2 = new String("this is a simple string"); // String object instance
var num2 = new Number(1.45); // Number object instance
var bool2 = new Boolean(true); // primitive boolean


var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);

if (str1 === "string") {
	console.log('equal');
}
if (num1 === 1.45) {
	console.log('equal');
}
if (bool1 === true) {
	console.log('equal');
}


var str2 = new String("string");
var num2 = new Number(1.45);
var bool2 = new Boolean(true);

if (str2 === "string") {
	console.log('equal');
} else {
	console.log('not equal');
}
if (num2 === 1.45) {
	console.log('equal');
} else {
	console.log('not equal');
}
if (bool2 === true) {
	console.log('equal');
} else {
	console.log('not equal');
}


var num1 = 1.45;
var num2 = new Number(1.45);

console.log(typeof num1); // prints out number
console.log(typeof num2); // prints out object
