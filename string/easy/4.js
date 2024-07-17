// Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
function fixImport(str) {
  let splited = str.split(" ");
  let result = `from ${splited[3]} import ${splited[1]}`;
  return result;
}
console.log(fixImport("import object from module_name")); //➞ "from module_name import object"
console.log(fixImport("import randint from random")); //➞ "from random import randint"
console.log(fixImport("import pi from math")); //➞ "from math import pi"
// Notes
// All Tests will be valid strings.
