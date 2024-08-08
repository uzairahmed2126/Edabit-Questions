// Same ASCII?
// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

// Examples
function sameAscii(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    sum1 += a.charCodeAt(i);
    sum2 += b.charCodeAt(i);
  }
  return sum1 === sum2;
}
console.log(sameAscii("a", "a")); //➞ true
console.log(sameAscii("AA", "B@")); //➞ true
console.log(sameAscii("EdAbIt", "EDABIT")); //➞ false
// Notes
// If you need some help with ASCII codes, check the Resources tab for an image of all ASCII codes used in this challenge.
