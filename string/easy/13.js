// Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

// Examples
function isTrue(relation) {
  //   return eval(relation.replace("=", "=="));
  let operator = relation.includes("=")
    ? "="
    : relation.includes(">")
    ? ">"
    : "<";
  let parts = relation.split(operator);
  let left = parseInt(parts[0], 10);
  let right = parseInt(parts[1], 10);
  return operator === "="
    ? left === right
    : operator === ">"
    ? left > right
    : left < right;
}
console.log(isTrue("2=2")); //➞ true
console.log(isTrue("8<7")); //➞ false
console.log(isTrue("5=13")); //➞ false
console.log(isTrue("15>4")); //➞ true
// Notes
// Tests will only have three types of relations: =, >, and <
// Many approaches work here, but the eval() function is particularly useful!
