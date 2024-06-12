// Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples
function isFourLetters(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].length === 4) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  return arr.filter((element) => element.length === 4);
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"])); //➞ ["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); //➞ ["Bear"]
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); //➞ ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.
