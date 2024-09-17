// Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

// Examples
// function longestWord(str) {
//   let result = [];
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let lengthh = words[i].length;
//     result.push(lengthh);
//   }
//   let maxValue = Math.max(...result);
//   return words.filter((item) => item.length === maxValue).shift();
// }
function longestWord(str) {
  let words = str.split(" ");
  let maxNum = words.map((item) => item.length).sort((a, b) => b - a)[0];
  return words.filter((item) => item.length === maxNum)[0];
}
console.log(longestWord("Hello darkness my old friend")); //➞ "darkness"
console.log(longestWord("Hello there mate")); //➞ "Hello"
console.log(longestWord("Kayla's toy is plastic")); //➞ "Kayla's"
// Notes
// N/A
