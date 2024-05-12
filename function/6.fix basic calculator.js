// Fix Basic Calculator
// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Look at the examples below to get an idea of what the function should do:

// Examples
function basicCalculator(num1, operator, num2) {
  let res = "";
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "/":
      res = num1 / num2;
      if (res === Infinity) {
        return null;
      }
      break;
    case "*":
      res = num1 * num2;
      break;
    default:
      res = null;
      break;
  }
  return res;
}
console.log(basicCalculator(2, "+", 4)); //➞ 6
console.log(basicCalculator(6, "-", 5)); //➞ 1
console.log(basicCalculator(12, "/", 3)); //➞ 4
console.log(basicCalculator(3, "*", 4)); //➞ 12
console.log(basicCalculator(1, "/", 0)); //➞ null
// Division by zero is not possible
console.log(basicCalculator(1, "x", 0)); //➞ null
// 'x' is not an operator
// Notes
// N/A
