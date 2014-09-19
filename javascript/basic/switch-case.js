var op = 1;
var message;

// if (op == 1) {
//   message = 'One';
// }
// if (op == 2) {
//   message = 'Two';
// }
// if (op == 3) {
//   message = 'Three';
// }

switch (op) {
  case 1:
    message = 'One';
    break;
  case 2:
    message = 'Two';
    break;
  case 3:
    message = 'Three';
    break;
  default:
    message = 'Another value';
    break;
}

console.log(message);
