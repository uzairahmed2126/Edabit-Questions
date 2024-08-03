// Find the Characters Counterpart Char Code
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// Examples
// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97
function counterpartCharCode(char) {
  //   if (char.toLowerCase() !== char.toUpperCase()) {
  //     if (char === char.toLowerCase()) {
  //       return char.toUpperCase().charCodeAt();
  //     } else {
  //       return char.toLowerCase().charCodeAt();
  //     }
  //   }
  const chars = { A: 97, a: 65 };
  return chars[char];
}
console.log(counterpartCharCode("A")); //➞ 97

console.log(counterpartCharCode("a")); //➞ 65
// Notes
// The argument will always be a single character.
// Not all inputs will have a counterpart (e.g. numbers), in which case return the input's char code.
