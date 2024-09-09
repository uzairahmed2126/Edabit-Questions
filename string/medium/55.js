// Length of Worm
// Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.

// Examples
function wormLength(worm) {
  if (worm.length === 0) {
    return "invalid";
  }
  let count = 0;
  for (let i = 0; i < worm.length; i++) {
    if (worm[i] !== "-") {
      return "invalid";
    }
    count += 10;
  }
  return `${count} mm`;
}
console.log(wormLength("----------")); //➞ "100 mm."
console.log(wormLength("")); //➞ "invalid"
console.log(wormLength("---_-___---_")); //➞ "invalid"
// Notes
// Return "invalid" if an empty string is given or if the string has characters other than -.
