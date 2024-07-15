// Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// console.log(firstAndLast(string)) //➞ [first, last]
// Examples
function firstAndLast(str) {
  let result = [];
  let sorted = "";
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    result[i] = str[i];
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] > result[j + 1]) {
        [result[j + 1], result[j]] = [result[j], result[j + 1]];
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    sorted += result[i];
  }
  for (let i = sorted.length - 1; i >= 0; i--) {
    reversed += sorted[i];
  }
  return [sorted, reversed];
  //   let splited = str.split("");
  //   const sorted = splited.sort().join("");
  //   const reversed = splited.reverse().join("");
  //   return [sorted, reversed];
}
console.log(firstAndLast("marmite")); //➞ ["aeimmrt", "trmmiea"]

console.log(firstAndLast("bench")); //➞ ["bcehn", "nhecb"]

console.log(firstAndLast("scoop")); //➞ ["coops", "spooc"]
// Notes
// Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).
