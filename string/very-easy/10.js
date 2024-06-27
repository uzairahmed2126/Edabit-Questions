// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
function concatName(str1, str2) {
  // return `${str2+', ' +str1}`
  return str2 + ", ".concat(str1);
}
console.log(concatName("First", "Last")); //➞ "Last, First"
console.log(concatName("John", "Doe")); //➞ "Doe, John"
console.log(concatName("Mary", "Jane")); //➞ "Jane, Mary"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
