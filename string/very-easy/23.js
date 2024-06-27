// Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples
function frontThree(str) {
  let front = str.length < 3 ? str : str.slice(0, 3);
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += front;
  }
  return result;
  // return str.substring(0,3).repeat(3)
}
console.log(frontThree("Python")); //➞ "PytPytPyt"
console.log(frontThree("Cucumber")); //➞ "CucCucCuc"
console.log(frontThree("bioshock")); //➞ "biobiobio"
// Notes
// Don't forget to return the result.
