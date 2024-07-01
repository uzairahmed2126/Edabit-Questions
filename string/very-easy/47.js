// WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

// Examples
function add(char, str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "" + char;
    }
    result += str[i].replace(' ','');
    // result += result[i].replace(" ", "");
    // return
    // result += str[i].replace(" ", char);
  }
  return result;
}
console.log(add("R", "javascript is fun")); //➞ "javascriptRisRfun"
console.log(add("#", "hello world!")); //➞ "hello#world!"
console.log(add("#", " ")); //➞ "#"
// Notes
// Make sure there are no spaces between words when returning the function.
