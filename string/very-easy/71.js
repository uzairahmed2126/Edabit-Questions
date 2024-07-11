// Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// Examples
function stupidAddition(num1, num2) {
  if (typeof num1 === "string" && typeof num2 === "string") {
    return Number(num1) + Number(num2);
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + "" + num2;
  } else {
    return null;
  }
}
console.log(stupidAddition(1, 2)); //➞ "12"
console.log(stupidAddition("1", "2")); //➞ 3
console.log(stupidAddition("1", 2)); //➞ null
// Notes
// If the two parameters are different data types, return null.
// All parameters will either be strings or integers.
