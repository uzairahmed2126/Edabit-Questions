// Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// Examples
function formatDate(str) {
  //   return str.split("/").reverse().join("");
  let result = [];
  //   for (let i = 0; i < str.length; i++) {

  //   }
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     if (str[i] !== "/") {
  //       result.push(str[i]);
  //     }
  //   }
  [month, day, year] = str.split("/");
  return `${year + day + month}`;
}
console.log(formatDate("11/12/2019")); //➞ "20191211"
console.log(formatDate("12/31/2019")); //➞ "20193112"
console.log(formatDate("01/15/2019")); //➞ "20191501"
// Notes
// Return value should be a string.
