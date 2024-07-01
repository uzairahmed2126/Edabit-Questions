// Modifying the Last Character
// Create a function which makes the last character of a string repeat n number of times.

// Examples
function modifyLast(str, num) {
  //   let result = str;
  //   for (let i = 0; i < num - 1; i++) {
  //     if (str[str.length - 1]) {
  //       result += str[str.length - 1];
  //     }
  //   }
  //   return result;
  let last = str[str.length - 1];
  return str + last.repeat(num - 1);
}
console.log(modifyLast("Hello", 3)); //➞ "Hellooo"
console.log(modifyLast("hey", 6)); //➞ "heyyyyyy"
console.log(modifyLast("excuse me what?", 5)); //➞ "excuse me what?????"
// Notes
// Tests will include numbers and punctuation.
// Make sure your code is not case sensitive.
