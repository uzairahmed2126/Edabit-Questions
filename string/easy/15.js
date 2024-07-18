// Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// Examples
function sayHelloBye(str, num) {
  let hello = "Hello ";
  let first = str[0].toUpperCase();
  let joinWord = first + str.slice(1, str.length);
  if (num === 1) {
    return hello + joinWord;
  } else {
    return "Bye " + joinWord;
  }
}
console.log(sayHelloBye("alon", 1)); //➞ "Hello Alon"

console.log(sayHelloBye("Tomi", 0)); //➞ "Bye Tomi"

console.log(sayHelloBye("jose", 0)); //➞ "Bye Jose"
// Notes
// The name you return must be capitalized.
