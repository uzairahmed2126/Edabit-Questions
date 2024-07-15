// Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

// Examples
function toArray(str) {
  let result = [];
  let current = "";
  let i = 0;

  while (i < str.length) {
    if (str[i] === ",") {
      result.push(current.trim());
      current = "";
      i++;
    } else {
      current += str[i];
      i++;
    }
  }

  if (current !== "") {
    result.push(current.trim());
  }

  return result;
  //   return str.split(',');
  //   let result = [];
  //   let storeInStr = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (!str[i].includes(" ")) {
  //       storeInStr += str[i];
  //     } else {
  //       result.push(storeInStr);
  //     }
  //   }
  //   return result;
}
console.log(toArray("watermelon, raspberry, orange"));
//➞ ["watermelon", "raspberry", "orange"]
console.log(toArray("x1, x2, x3, x4, x5"));
//➞ ["x1", "x2", "x3", "x4", "x5"]
console.log(toArray("a, b, c, d"));
//➞ ["a", "b", "c", "d"]
console.log(toArray(""));
//➞ []
// Notes
// Return an empty array for an empty string.
