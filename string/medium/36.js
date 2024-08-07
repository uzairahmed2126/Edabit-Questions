// Neatly Formatted Math
// Given a simple math expression as a string, neatly format it as an equation.

// Examples
// function formatMath(expression) {
//   let combined = "";
//   let splited = expression.split("");
//   for (let i = 0; i < expression.length; i++) {
//     if (splited[i] === "x") {
//       splited[i] = "*";
//       combined += splited[i];
//     } else if (splited[i] !== " ") {
//       combined += splited[i];
//     }
//   }
//   return `${expression} = ${eval(combined)}`;
// }
function formatMath(expression) {
  const sanitizedExpression = expression.replace("x", "*");
  return `${sanitizedExpression} = ${eval(sanitizedExpression)}`;
}
function formatMath(expression) {
  const parts = expression.split(" ");
  const num1 = parseInt(parts[0]);
  const operator = parts[1];
  const num2 = parseInt(parts[2]);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Unsupported operator");
  }
  return `${expression} = ${result}`;
}
console.log(formatMath("3 + 4")); //➞ "3 + 4 = 7"
console.log(formatMath("3 - 2")); //➞ "3 - 2 = 1"
console.log(formatMath("4 x 5")); //➞ "4 x 5 = 20"
console.log(formatMath("6 / 3")); //➞ "6 / 3 = 2"
// Notes
// You will need to deal with addition, subtraction, multiplication and division.
// Division will have whole number answers (and will obviously not involve 0).
