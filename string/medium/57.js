// Is the Phone Number Formatted Correctly?
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

// This is what a valid phone number looks like:

// (123) 456-7890
// Examples
// function isValidPhoneNumber(str) {
//   let len = str.length;
//   let lastPart = str.slice(len - 4, len);
//   let spaceOrNot = str.slice(len - 5, len);
//   let firstPart = str.slice(0, len - 8);
//   return (
//     firstPart[0] === "(" &&
//     firstPart[firstPart.length - 2] === ")" &&
//     spaceOrNot[0] === "-" &&
//     typeof +lastPart === "number"
//   );
// }
function isValidPhoneNumber(str) {
  //   for(let i =0;i<str.length;i++) {
  return str[0] === "(" && str[4] === ")" && str[5] === " " && str[9] === "-";
  //   }
}
console.log(isValidPhoneNumber("(123) 456-7890")); //➞ true
console.log(isValidPhoneNumber("1111)555 2345")); //➞ false
console.log(isValidPhoneNumber("098) 123 4567")); //➞ false
// Notes
// Don't forget the space after the closing parenthesis.
