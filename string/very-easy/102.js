// Is the String a Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

// Examples
function checkPalindrome(str) {
  let result = [];
  let storeInStr = "";
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  for (let i = result.length - 1; i >= 0; i--) {
    storeInStr += result[i];
  }
  return storeInStr === str;
  //   let splited = str.split("");
  //   if (str.length >= 3) {
  //     return splited.reverse().join("") === str;
  //   }
}
console.log(checkPalindrome("mom")); //➞ true
console.log(checkPalindrome("scary")); //➞ false
console.log(checkPalindrome("reviver")); //➞ true
console.log(checkPalindrome("stressed")); //➞ false
// Notes
// All test input is lower cased.
