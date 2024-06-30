// Hello; Hello World; World
// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
function helloWorld(num) {
  let result = "";
  let hello = "Hello ";
  let world = "World ";
  if (num % 3 === 0 && num % 5 === 0) {
    result += hello + world;
  } else if (num % 3 === 0) {
    result += hello;
  } else if (num % 5 === 0) {
    result += world;
  }

  return result;
}
console.log(helloWorld(3)); //➞ "Hello"
console.log(helloWorld(5)); //➞ "World"
console.log(helloWorld(15)); //➞ "Hello World"
// Notes
// Don't forget to return the result.
