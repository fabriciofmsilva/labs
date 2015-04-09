// 1.2. Extracting a List from a String
// Problem
// Before: This is a list of items: cherries, limes, oranges, apples.
// After: ['cherries','limes','oranges','apples']
var sentence = 'This is one sentence. This is a sentence with a list of items:' +
			   'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);

var listStr = sentence.substring(start+1, end);
var fruits = listStr.split(',');
// var fruits = sentence.substring(start+1, end).split(",");

console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']

// var fruits = listStr.split(/\s*,\s*/);
fruits.forEach(function (elmnt, indx, arry) {
	arry[indx] = elmnt.trim();
});

console.log(fruits); // ['cherries', 'oranges', 'apples", "bananas"]
