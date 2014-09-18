/*
 * Dynamically Selecting a Method/Property
 */

if (condition) {
  myObj.method1(someArg);
} else {
  myObj.method2(someArg);
}

obj[expressionResultingInMemberName] == obj.memberName;

/*
 * Use the square brackets ([ ]) operator.
 */

object['propertyName']; // => object.propertyName
object['methodName'](arg1); // => object.methodName(arg1)

/*
 * Toggle behavior.
 */

// Call show() or hide(), depending on shouldBeVisible
element[shouldBeVisible ? 'show' : 'hide']();

// Avoid "heavy" animations on IE to favor immediate reflow
// (assumes we've got a properly set isIE variable)
element[isIE ? 'simpleEffect' : 'complexEffect']();

/*
 * Compose method names.
 */

element[(enable ? 'add' : 'remove') + 'ClassName']('enabled');

/*
 * Try this example code in any window.
 */

var love = { firstName: 'Élodie', lastName: 'Porteneuve' };
var useFirstName = true;
alert(love[useFirstName ? 'firstName' : 'lastName']); // => "Élodie"
