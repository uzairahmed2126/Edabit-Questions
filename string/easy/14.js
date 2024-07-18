// Regex Series: Even Number?
// Write a regular expression that matches only an even number. Numbers will be presented as strings.

// Examples
function reg(str) {
  const regex = /^\d*[02468]$/;
  return regex.test(str);
}
console.log(reg("2341")); //➞ false
console.log(reg("132")); //➞ true
console.log(reg("29")); //➞ false
console.log(reg("5578")); //➞ true
// Notes
// This challenge is designed for RegEx only.
