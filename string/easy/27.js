// How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

// Examples
function getDecimalPlaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(".")) {
      return i;
    }
  }
  return 0;
  //   return str.indexOf(".") !== -1 ? str.indexOf(".") : 0;
}
console.log(getDecimalPlaces("43.20")); //➞ 2

console.log(getDecimalPlaces("400")); //➞ 0

console.log(getDecimalPlaces("3.1")); //➞ 1
// Notes
// Return 0 if the number doesn't have any decimal places (see example #2).
