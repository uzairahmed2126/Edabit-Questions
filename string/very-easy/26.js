// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
function firstLast(str) {
  //   return str[0] + str[str.length - 1];
  return str.slice(0, 1) + str.slice(-1);
}
console.log(firstLast("ganesh")); //➞ "gh"

console.log(firstLast("kali")); //➞ "ki"

console.log(firstLast("shiva")); //➞ "sa"

console.log(firstLast("vishnu")); //➞ "vu"

console.log(firstLast("durga")); //➞ "da"
// Notes
// There is no empty string.
