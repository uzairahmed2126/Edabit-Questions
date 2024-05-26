// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
function lessThan100(...nums) {
  let count = 0;
  //   nums.map((element, index) => (count += element));
  //   return count < 100;
  //   return nums.reduce((acc, cur) => acc + cur < 100);
  //   nums.filter((element, index) => (count += element));
  //   return count < 100;
  //   nums.forEach((element) => (count += element));
  //   return count < 100;
  return nums[0] + nums[1] < 100;
}
console.log(lessThan100(22, 15)); //➞ true
// 22 + 15 = 37
console.log(lessThan100(83, 34)); //➞ false
// 83 + 34 = 117
console.log(lessThan100(3, 77)); //➞ true
// Notes
// N/A
