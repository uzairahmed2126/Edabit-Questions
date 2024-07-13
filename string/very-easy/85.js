// Between Words
// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

// Examples
function isBetween(first, last, word) {
  //   return first < word && word < last;
  // return first.localeCompare(word) < 0 && word.localeCompare(last) < 0;
  let words = [first, last, word];
  words.sort();
  return words[1] === word;
}
console.log(isBetween("apple", "banana", "azure")); //➞ true

console.log(isBetween("monk", "monument", "monkey")); //➞ true

console.log(isBetween("bookend", "boolean", "boost")); //➞ false
// Notes
// All letters will be in lowercase.
// All three words will be different.
// Remember that the string word is in the middle.
