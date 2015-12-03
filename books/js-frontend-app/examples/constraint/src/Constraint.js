// Constraints

// String Length Constraints
/**
 * @function constraintStringLength
 *
 * @param {string} value - The value to check.
 * @param {(number|null)} mininum - The mininum value to check then null check as Negative Infinity.
 * @param {(number|null)} maximum - The maximum value to check then null check as Positive Infinity.
 *
 * @return {boolean}
 *
 * @author Fabrício Silva @fabriciofmsilva <fabriciofmsilva@gmail.com>
 *
 */
function constraintStringLength(value, minimum, maximum) {

  var isConstraintValid = false;

  if (value === undefined) {
    throw new ReferenceError('constraintStringLength(): First argument (value) must be passed');
  } else if (typeof value !== 'string') {
    throw new TypeError('constraintStringLength(): First argument (value) must be a String');
  }

  if (minimum === null) {
    minimum = Number.NEGATIVE_INFINITY;
  } else if (typeof minimum !== 'number') {
    throw new TypeError('constraintStringLength(): The second (minimum) value must be a number');
  }

  if (maximum === null) {
    maximum = Number.POSITIVE_INFINITY;
  } else if (typeof maximum !== 'number') {
    throw new TypeError('constraintStringLength(): The third (maximum) value must be a number');
  }

  if(value.length >= minimum && value.length <= maximum) {
    isConstraintValid = true;
  }

  return isConstraintValid;
}


// Mandatory Value Constraints
// TODO: tests
// TODO: doc comment
function constraintMandatoryValue(value) {

  if (value === undefine) {
    throw new ReferenceError('constraintMandatoryValue(): First argument (value) must be passed');
  } else {
    return true;
  }
}



// Range Constraints
// NonNegativeInteger
function constraintNonNegativeInteger(value) {

  if (typeof(value) !== 'number' ||
      number < 0) {
    throw new ReferenceError('constraintNonEmptyString(): First argument (value) must be a positive number!');
  } else {
    return true;
  }
}

// NonEmptyString
function constraintNonEmptyString(value) {

  if (typeof(value) !== 'string' ||
      value.trim() === '') {
    throw new ReferenceError('constraintNonEmptyString(): First argument (value) must be a non-empty string!');
  } else {
    return true;
  }
}



// Interval Constraints
function constraintInterval(value, min, max) {
  if (value < min ||
      value > max) {
    throw new Error('constraintInterval(): First argument (value) must be between' + min + 'and' + max + '!');
  } else {
    return true;
  }
}



// Pattern Constraints
function constraintPattern(id) {
  if (!/\b\d{9}(\d|X)\b/.test( id)) {
    return "The ISBN must be a 10-digit string or a 9-digit string followed by 'X'!";
  } else return "";
}




// Cardinality Constraints
function constraintCardinality(nickNames) {
  if (nickNames.length > 3) {
    return "There must be no more than 3 nicknames!";
  } else return "";
}



// Uniqueness Constraints




// Standard Identifiers (Primary Keys)




// Referential Integrity Constraints



// Frozen Value Constraints (read-only value constraint)
Object.defineProperty( obj, "teamSize", {value: 5, writable: false, enumerable: true});



















