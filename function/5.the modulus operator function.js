// The Modulus Operator Function
// Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.

// Examples
function mod(num1, num2) {
  return num1 - Math.floor(num1 / num2) * num2;
}
console.log(mod(5, 2)); //➞ 1
console.log(mod(218, 5)); //➞ 3
console.log(mod(6, 3)); //➞ 0
// Notes
// Don't use the % operator to return the results.
