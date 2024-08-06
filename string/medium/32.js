// Get the Century
// Create a function that takes in a year and returns the correct century.

// Examples
// function century(years) {
//   if (years >= 1701 && years <= 1800) {
//     return "18th century";
//   } else if (years >= 1501 && years <= 1600) {
//     return "16th century";
//   } else if (years >= 1001 && years <= 1100) {
//     return "11th century";
//   } else if (years >= 901 && years <= 1000) {
//     return "10th century";
//   } else if (years >= 2001 && years <= 2100) {
//     return "21th century";
//   }
// }
function century(year) {
  let cent = Math.ceil(year / 100);
  let suffix = "th";

  if (cent % 10 === 1 && cent % 100 !== 11) {
    suffix = "st";
  } else if (cent % 10 === 2 && cent % 100 !== 12) {
    suffix = "nd";
  } else if (cent % 10 === 3 && cent % 100 !== 13) {
    suffix = "rd";
  }

  return cent + suffix + " century";
}
console.log(century(1756)); //➞ "18th century"
console.log(century(1555)); //➞ "16th century"
console.log(century(1000)); //➞ "10th century"
console.log(century(1001)); //➞ "11th century"
console.log(century(2001)); //➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.
