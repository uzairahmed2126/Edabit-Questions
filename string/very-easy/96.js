// Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Examples
function reverseCapitalize(str) {
  //   let result = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     result += str[i];
  //   }
  //   return result.toUpperCase();
  let split = str.split("");
  return split.reverse().join("").toUpperCase();
}
console.log(reverseCapitalize("abc")); //➞ "CBA"
console.log(reverseCapitalize("hellothere")); //➞ "EREHTOLLEH"
console.log(reverseCapitalize("input")); //➞ "TUPNI"
// Notes
// N/A
