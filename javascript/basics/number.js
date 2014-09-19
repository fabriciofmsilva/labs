/*
 * Number.prototype.toFixed()
 */

var num = 6723.765128;

console.log(num.toFixed(2)); // "6723.77"
console.log(num.toFixed()); // "6724"
console.log(num.toFixed(5)); // "6723.76513"


/*
 * Number.prototype.toExponential()
 */

var num = 6723.765128;

console.log(num.toExponential()); // "6.723765128e+3"
console.log(num.toExponential(4)); // "6.7238e+3"
console.log(num.toExponential(10)); // "6.7237651280e+3"


/*
 * Number.prototype.toPrecision()
 */

var num = 6723.765128;

console.log(num.toPrecision(5)); // 6723.8
console.log(num.toPrecision(2)); // 6.7e+3
console.log(num.toPrecision(11)); // 6723.7651280
