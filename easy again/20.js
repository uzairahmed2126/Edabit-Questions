// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples
function maxTotal(arr) {
  arr.sort((a, b) => b - a);
  let i = 0;
  let countMax = 0;
  while (i<arr.length) {
    if(i<5) {
        countMax += arr[i];
    }
    i++;
  }
  return countMax;
  //   let result = 0;
  //   for (let i = 0; i < 5; i++) {
  //     result += arr[i];
  //   }
  //   return result;
}
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); //➞ 43

console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); //➞ 100

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //➞ 40
// Notes
// You can select any 5 numbers from the given array to form maximum possible total.
