// Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

// Examples
function convertToDecimal(arr) {
  //   return arr.map((item) => {
  //     return parseFloat(item) / 100;
  //     // return +((0 + item.replace("%", "")) / 100).toFixed(item.length);
  //   });
  return arr.reduce((acc, cur) => {
    acc.push(parseFloat(cur) / 100);
    return acc;
  }, []);
}
console.log(convertToDecimal(["1%", "2%", "3%"])); //➞ [0.01, 0.02, 0.03]

console.log(convertToDecimal(["45%", "32%", "97%", "33%"])); //➞ [0.45, 0.32, 0.97, 0.33]

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])); //➞ [0.33, 0.981, 0.5644, 1]
// Notes
// N/A
