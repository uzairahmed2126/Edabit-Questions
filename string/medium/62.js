// Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

// Examples
function asciiSort(arr) {
  //   let words = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     words += arr[i] + " ";
  //   }
  //   return words.split("").reduce(
  //     (acc, cur) => {
  //       let ASCII = cur.charCodeAt();
  //       if (ASCII !== 32) {
  //         acc[0] += ASCII;
  //       }
  //       return acc;
  //     },
  //     [0, 0]
  //   );
  let splited = arr.map((item) => item.split(""));
  let sum = [];
  for (let i = 0; i < splited.length; i++) {
    let words = splited[i];
    let innerSum = 0;
    for (let j = 0; j < words.length; j++) {
      let char = words[j];
      innerSum += char.charCodeAt();
    }
    sum.push(innerSum);
  }
  let first = sum[0];
  let last = sum[1];
  let firstWord = arr[0];
  let lastWord = arr[1];
  return first < last ? firstWord : lastWord;
}
console.log(asciiSort(["hey", "man"])); //➞ "man"
// ["h", "e", "y"] //➞ sum([104, 101, 121]) //➞ 326
// ["m", "a", "n"] //➞ sum([109, 97, 110]) //➞ 316
console.log(asciiSort(["majorly", "then"])); //➞ "then"
console.log(asciiSort(["victory", "careless"])); //➞ "victory"
// Notes
// Both words will have strictly different ASCII sums.
