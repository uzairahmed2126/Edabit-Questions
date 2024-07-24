// Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
function wordLengths(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i].length);
  //   }
  //   return result;
  return arr.map((element) => element.length);
}
console.log(wordLengths(["hello", "world"])); //➞ [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); //➞ [9, 12, 9]
console.log(
  wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])
); //➞ [3, 5, 9, 4, 2, 3, 8]
// Notes
// No test case will contain punctuation.
// Arrays can be of various lengths.
