// Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:
function indexShuffle(str) {
  let evenChar = "";
  let oddChar = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenChar += str[i];
    } else {
      oddChar += str[i];
    }
  }
  return evenChar + oddChar;
}
console.log(indexShuffle("abcd")); //➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
// Examples;
console.log(indexShuffle("abcdefg")); //➞ "acegbdf"
console.log(indexShuffle("holiday")); //➞ "hldyoia"
console.log(indexShuffle("maybe")); //➞ "myeab"
// Notes
// 0 should be treated as an even number.
