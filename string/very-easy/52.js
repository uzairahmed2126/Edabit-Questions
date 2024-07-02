// Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

// Examples
function isBoiling(str) {
  let temp = str.slice(0, -1);
  let unit = str[str.length - 1];
  if ((unit === "F" && temp >= 212) || (unit === "C" && temp >= 100)) {
    return true;
  }
  return false;
}
console.log(isBoiling("212F")); //➞ true
console.log(isBoiling("100C")); //➞ true
console.log(isBoiling("0F")); //➞ false
// Notes
// The boiling point of water is 212F in Fahrenheit and 100C in Celsius.
