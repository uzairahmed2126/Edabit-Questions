// String to Integer and Vice Versa
// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples
function toInt(str) {
  //   return +str;
  //   return str - 0;
  //   return str / 1;
  // return str*1
  // return parseInt(str)
  return Number(str);
}
function toStr(num) {
  //   return num + "";
  //   return `${num}`;
  return String(num);
}
console.log(toInt("77")); //➞ 77

console.log(toInt("532")); //➞ 532

console.log(toStr(77)); //➞ "77"

console.log(toStr(532)); //➞ "532"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
