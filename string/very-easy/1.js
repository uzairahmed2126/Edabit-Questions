// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
function giveMeSomething(str) {
    // return "something "+str;
  return "something ".concat(str);
}
console.log(giveMeSomething("is better than nothing")) //➞ "something is better than nothing"
console.log(giveMeSomething("Bob Jane")) //➞ "something Bob Jane"
console.log(giveMeSomething("something")) //➞ "something something"
// Notes
// Assume an input is given.