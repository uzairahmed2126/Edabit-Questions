// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and returns their sum.

// Examples
function addition(num1, num2) {
  //   return numbers.reduce((acc, cur) => acc + cur);
  // let count = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   count += +numbers[i];
  // }
  // return count;
  //   return numbers[0]+ +numbers[1]
  // return (num1 + +num2);
  //   return Number(num1 + +num2);
  //   return num1 + (1 * num2)
  //   return num1 + num2 / 1;
  return num1 + Number(num2);
}
console.log(addition(3, 2)); //➞ 5

console.log(addition(-3, -6)); //➞ -9

console.log(addition(7, "3")); //➞ 10
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
