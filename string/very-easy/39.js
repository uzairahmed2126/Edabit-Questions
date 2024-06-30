// Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples
function longBurp(num) {
  //   return "Bu" + "r".repeat(num) + "p";
  let result = "Bu";
  for (let i = 0; i < num; i++) {
    result += "r";
  }
  return result.concat("p");
}
console.log(longBurp(3)); //➞ "Burrrp"
console.log(longBurp(5)); //➞ "Burrrrrp"
console.log(longBurp(9)); //➞ "Burrrrrrrrrp"
// Notes
// Expect num to always be >= 1.
// Remember to use a capital "B".
// Don't forget to return the result.
