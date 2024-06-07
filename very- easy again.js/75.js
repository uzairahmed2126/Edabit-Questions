// The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
function forbiddenLetter(letter, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] === letter) {
      return false;
    }
    // return arr[i][i].includes(letter);
  }
  return true;
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); //➞ false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); //➞ true
console.log(forbiddenLetter("m", [])); //➞ true
// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.
