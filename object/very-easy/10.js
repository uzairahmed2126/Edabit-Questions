// ES6: Destructuring Objects III
const obj = { two: 2, one: 1 };
const { one, two } = obj;

console.log(one, two); // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.
