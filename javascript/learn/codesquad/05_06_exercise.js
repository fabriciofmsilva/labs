var code = prompt('What\'s is the code?');
var hours = prompt('How many hours it work?');
var salaryPerHour = 10;
var salaryOvertime = 20;
var overtime = 50;

if (hours > overtime) {
  var overflow = (hours - overtime) * overtime;
  var salary = (overtime * salaryPerHour) + overflow;
} else {
  var overflow = 0;
  var salary = hours * salaryPerHour;
}

alert('Salary total: ' + salary + '. Overflow: ' + overflow);
