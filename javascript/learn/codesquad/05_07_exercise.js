var number1 = prompt('Enter a number');
var number2 = prompt('Enter a number');
var number3 = prompt('Enter a number');
var number4 = prompt('Enter a number');

var squareNumber1 = number1 * number1;
var squareNumber2 = number2 * number2;
var squareNumber3 = number3 * number3;
var squareNumber4 = number4 * number4;

if (squareNumber3 >= 1000) {
  alert(squareNumber3);
} else {
  alert('The square of number 1 is: ' + squareNumber1 + '! ' +
    'The square of number 2 is: ' + squareNumber2 + '! ' +
    'The square of number 3 is: ' + squareNumber3 + '! ' +
  'The square of number 4 is: ' + squareNumber4 + '!'
  );
}
