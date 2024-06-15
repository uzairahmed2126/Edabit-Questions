// Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// console.log(firstAndLast(string)); //➞ [first, last]
// Examples
function firstAndLast(str) {
  let chars = str.split("");
  //   let first = chars.sort().join("");
  //   let second = chars.sort().reverse().join("");
  //   return [first, second];
  for (let i = 0; i < chars.length; i++) {
    for (let j = i; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
    }
  }
  let first = chars.join("");
  for (let i = 0; i < chars.length; i++) {
    for (let j = i; j < chars.length; j++) {
      if (chars[i] < chars[j]) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
    }
  }
  let last = chars.join("");
  return [first, last];
}
console.log(firstAndLast("marmite")); //➞ ["aeimmrt", "trmmiea"]

console.log(firstAndLast("bench")); //➞ ["bcehn", "nhecb"]

console.log(firstAndLast("scoop")); //➞ ["coops", "spooc"]
// Notes
// Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).
