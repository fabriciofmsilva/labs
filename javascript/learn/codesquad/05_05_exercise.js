var maxKilogram = 50;
var finePerKilogram = 4;

var fishKilogram = prompt('Enter the kilogram of fish:');

if(fishKilogram > maxKilogram) {
   var overweight = fishKilogram - maxKilogram;
   var fine = overweight * finePerKilogram;
   alert('You pass ' + overweight + ' of maximum! Your fine is: US$' + fine);
} else {
  alert('You don\'t pass the overweight of fish');
}
