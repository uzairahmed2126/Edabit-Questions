// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
function nameString(str) {
  let edabit = "Edabit";
  return str.concat(edabit);
  // return str+edabit;
  // return `${str+edabit}`;
}
console.log(nameString("Mubashir")); //➞ "MubashirEdabit"
console.log(nameString("Matt")); //➞ "MattEdabit"
console.log(nameString("javaScript")); //➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
