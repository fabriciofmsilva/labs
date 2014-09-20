var polution = prompt('Enter the polution: ');

if (polution >= 0.3 && polution < 0.4) {
  alert('Group 1');
} else if (polution >= 0.4 && polution < 0.5) {
  alert('Group 1 and 2');
} else if (polution >= 0.5) {
  alert('All groups');
} else {
  alert('OK!');
}
