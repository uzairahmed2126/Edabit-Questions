// Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples
function averageIndex(arr) {
  let count = 0;
  //   arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].charCodeAt() - 96;
  }
  let average = count / arr.length;
  return parseFloat(average.toFixed(2));
  //   let positions = arr.map((letter) => letter.charCodeAt(0) - 96);
  //   let sum = positions.reduce((acc, cur) => acc + cur);
  //   let average = sum / arr.length;
  //   return +average.toFixed(2);
}
console.log(averageIndex(["a", "b", "c", "i"])); //➞ 3.75
console.log(averageIndex(["e", "d", "a", "b", "i", "t"])); //➞ 6.83
console.log(
  averageIndex([
    "y",
    "o",
    "u",
    "a",
    "r",
    "e",
    "t",
    "h",
    "e",
    "b",
    "e",
    "s",
    "t",
  ])
); //➞ 12.62
// Notes
// Letters given will always be lowercase.
