// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // result += str[i].repeat(2);
    for (let j = 0; j < 2; j++) {
      result += str[i];
    }
  }
  return result;
}
console.log(doubleChar("String")); //➞ "SSttrriinngg"

console.log(doubleChar("Hello World!")); //➞ "HHeelllloo  WWoorrlldd!!"

console.log(doubleChar("1234!_ ")); //➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
