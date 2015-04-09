// 1.3. Checking for an Existing, Nonempty String
// Problem: You want to verify that a variable is defined, is a string, and is not empty

var unknownVariable = 'String';

if (typeof unknownVariable === 'string' && unknownVariable.length > 0) {
	console.log('Not empty');
}

if (((typeof unknownVariable != 'undefined' && unknownVariable) &&
		unknownVariable.length() > 0) &&
		typeof unknownVariable.valueOf() == 'string') {
	console.log('Not empty');

}
