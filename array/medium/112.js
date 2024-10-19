// Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

// Examples
function flash(arr) {
  let result = 0;
  let num = arr[1];
  let first = arr[0];
  let second = arr[arr.length - 1];
  switch (num) {
    case "x":
      result = first * second;
      break;
    case "/":
      result = first / second;
      if (!Number.isInteger(result)) {
        return result.toFixed(2);
      }
      break;
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    default:
      "Enter Valid Value";
  }
  return result;
}
console.log(flash([3, "x", 7])); //➞ 21

console.log(flash([5, "+", 7])); //➞ 12

console.log(flash([10, "-", 9])); //➞ 1

console.log(flash([10, "/", 0])); //➞ undefined

console.log(flash([10, "/", 3])); //➞ 3.33
console.log(flash([10, "/", 2])); //➞ 3.33
// Notes
// Flash cards contain only zero or positive numbers.
