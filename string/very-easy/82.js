// Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.

// Examples
function removeFirstLast(str) {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (i !== 0 && i !== str.length - 1) {
  //       result += str[i];
  //     } else if (str.length <= 4) {
  //       result += str[i];
  //     }
  //   }
  //   return result;
  if (str.length >= 4) {
    return str.substring(1, str.length - 1);
    // return str.slice(1, -1);
  }
  return str;
}
console.log(removeFirstLast("hello")); //➞ "ell"
console.log(removeFirstLast("maybe")); //➞ "ayb"
console.log(removeFirstLast("benefit")); //➞ "enefi"
console.log(removeFirstLast("a")); //➞ "a"
// Notes
// If the string is 2 or fewer characters long, return the string itself (See Example #4).
