// String or Integer?
// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

// Examples
function intOrString(data) {
  //   let dataType = typeof data;
  //   return dataType.slice(0, 3);
  if (typeof data === "number") return "int";
  if (typeof data === "string") return "str";
  return "there is no string or number!!";
}
console.log(intOrString(8)); //➞ "int"
console.log(intOrString("Hello")); //➞ "str"
console.log(intOrString(9843532)); //➞ "int"
// Notes
// Input will either be an integer or a string.
