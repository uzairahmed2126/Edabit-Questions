// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
function convert(num) {
  const minutes = 60;
  const seconds = num;
//   return minutes * seconds;
  return minutes * arguments[0];
}
console.log(convert(5)); //➞ 300

console.log(convert(3)); //➞ 180

console.log(convert(2)); //➞ 120
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
