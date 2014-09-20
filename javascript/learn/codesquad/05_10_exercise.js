var age = prompt('What is the age of swimmer?');

if (age >= 5 && age <= 7) {
  alert('Infant A');
} else if (age >= 8 && age <= 11) {
  alert('Infant B');
} else if (age >= 12 && age <= 13) {
  alert('Teenager A');
} else if (age >= 14 && age <= 17) {
  alert('Teenager B');
} else {
  alert('Adult');
}
