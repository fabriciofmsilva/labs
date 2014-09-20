var number = prompt('Enter a number: ');

if (number % 2 == 0) {
  if (number > 0) {
    alert('Even and Positive');
  } else {
    alert('Even and Negative');
  }
} else {
  if (number > 0) {
    alert('Odd and Positive');
  } else {
    alert('Odd and Negative');
  }
}
