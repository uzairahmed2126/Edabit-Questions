// Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

// Examples
function mean(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let meanValue = total / arr.length;
  //   return +(total / arr.length).toFixed(1);
  return Math.round(meanValue * 10) / 10;
}
console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])); //➞ 7.2
console.log(mean([1, 3, 8, 9, 9, 10])); //➞ 6.7
console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])); //➞ 5.9
// Notes
// N/A
