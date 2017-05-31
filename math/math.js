/**
 *
 * @param {number} number
 * @return {boolean}
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 *
 * @param {number} number
 * @return {boolean}
 */
function isOdd(number) {
  return number % 2 === 1;
}

/**
 *
 * @param {number} number
 * @return {boolean}
 */
function isCompound(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count !== 2;
}

/**
 *
 * @param {number} number
 * @return {boolean}
 */
function isPrime(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  console.log(count);
  return count === 2;
}
