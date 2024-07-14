// Strange Pair
// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

// Examples
function isStrangePair(str1, str2) {
  return str1.endsWith(str2[0]) === str1.startsWith(str2.at(-1));
  //   return str1[str1.length - 1] === str2[0] && str1[0] === str2[str2.length - 1];
}
console.log(isStrangePair("ratio", "orator")); //➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
console.log(isStrangePair("sparkling", "groups")); //➞ true
console.log(isStrangePair("bush", "hubris")); //➞ false
console.log(isStrangePair("", "")); //➞ true
// Notes
// It should work on a pair of empty strings (they trivially share nothing).
