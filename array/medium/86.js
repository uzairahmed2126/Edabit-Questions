// Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples
// function simpleEncoder(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (str.indexOf(char) !== str.lastIndexOf(char)) {
//       result += "]";
//     } else {
//       result += "[";
//     }
//   }
//   return result;
// }
function simpleEncoder(str) {
  let encoding = "";
  let obj = {};
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    let char = lower[i];
    if (!Object.keys(obj).includes(char)) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  let values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1) {
      encoding += "[";
    } else {
      encoding += "]".repeat(values[i]);
    }
  }
  return encoding;
}
console.log(simpleEncoder("Mubashir")); //➞ "[[[[[[[["
// '[' for each character
console.log(simpleEncoder("Matt")); //➞ "[[]]"
// ']' for both 't'
console.log(simpleEncoder("eD  aBiT")); //➞ "[[]][[[["
// Two spaces in between
// Notes
// Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
// Spaces are also characters.
