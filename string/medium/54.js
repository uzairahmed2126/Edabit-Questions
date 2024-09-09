// Vowel Sandwich
// Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

// The first and last characters must be a consonant.
// The character in the middle must be a vowel.
// Examples
function isVowelSandwich(str) {
  let vowels = "aeiou";
  if (str.length !== 3) {
    return false;
  }
  let firstChar = str[0];
  let middleChar = str[1];
  let lastChar = str[str.length - 1];
  return !vowels.includes(firstChar || lastChar) && vowels.includes(middleChar);
}
console.log(isVowelSandwich("cat")); //➞ true
console.log(isVowelSandwich("ear")); //➞ false
console.log(isVowelSandwich("bake")); //➞ false
console.log(isVowelSandwich("try")); //➞ false
// Notes
// Return false if the word is not 3 characters in length.
// All words will be given in lowercase.
// y is not considered a vowel.
