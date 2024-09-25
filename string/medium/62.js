// Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

// Examples
// 1.
// function asciiSort(arr) {
//   let splited = arr.map((item) => item.split(""));
//   let sum = [];
//   for (let i = 0; i < splited.length; i++) {
//     let words = splited[i];
//     let innerSum = 0;
//     for (let j = 0; j < words.length; j++) {
//       let char = words[j];
//       innerSum += char.charCodeAt();
//     }
//     sum.push(innerSum);
//   }
//   let first = sum[0];
//   let last = sum[1];
//   let firstWord = arr[0];
//   let lastWord = arr[1];
//   return first < last ? firstWord : lastWord;
// }

// 2.
// function asciiSort(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     let word = arr[i];
//     for (let j = 0; j < word.length; j++) {
//       sum += word[j].charCodeAt();
//     }
//     result.push(sum);
//   }
//   let firstSum = result[0];
//   let lastSum = result[1];
//   let firstWord = arr[0];
//   let lastWord = arr[1];
//   return firstSum > lastSum ? lastWord : firstWord;
// }

// 3.
function asciiSort(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let word = arr[i];
    for (let j = 0; j < word.length; j++) {
      sum += word[j].charCodeAt();
    }
    result.push(sum);
  }
  let minValue = Math.min(...result);
  let index = result.indexOf(minValue);
  return arr[index];
}
console.log(asciiSort(["hey", "man"])); //➞ "man"
// ["h", "e", "y"] //➞ sum([104, 101, 121]) //➞ 326
// ["m", "a", "n"] //➞ sum([109, 97, 110]) //➞ 316
console.log(asciiSort(["majorly", "then"])); //➞ "then"
console.log(asciiSort(["victory", "careless"])); //➞ "victory"
// Notes
// Both words will have strictly different ASCII sums.
