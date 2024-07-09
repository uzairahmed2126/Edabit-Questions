// Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

// Examples
function calculate(num1, num2, operator) {
  // return eval(num1+operator+num2)
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculate(4, 9, "+")); //➞ 13
console.log(calculate(12, 5, "-")); //➞ 7
console.log(calculate(6, 3, "*")); //➞ 18
console.log(calculate(25, 5, "/")); //➞ 5
console.log(calculate(14, 3, "%")); //➞ 2
// Notes
// Numbers can be negative.
// The only operations used are those in the examples above.
