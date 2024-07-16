// ES6: Destructuring Objects II
const obj = { one: 1, two: 2, three: 3, four: 4 };

var { one, two, ...rest } = obj;
console.log(obj);
// We can assign variables by the same name properties of objects, but what if I wanted to assign obj.one to a different name like anotherOne?

// Use ES6 object destructuring to assign obj.one to the variable anotherOne. Variable two needs to remain assigned to obj.two. Ignore the .toString() function (used for validation).

// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab, look at some examples and come back to try the challenge.
