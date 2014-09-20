var tall = prompt('How tall are you?');
var sex = prompt('What is your gender? ');

if (sex == 'man') {
  var weight = (72.7 * tall) - 58;
  alert('Your ideal weight is ' + weight);
} else if (sex == 'woman') {
  var weight = (62.1 * tall) - 44.7;
  alert('Your ideal weight is ' + weight);
} else {
  alert('Something is wrong!');
}
