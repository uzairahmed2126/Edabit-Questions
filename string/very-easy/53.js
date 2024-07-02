// Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

// Examples
function height(length) {
  let heightInSm = (Math.sqrt(3) / 2) * length;
  heightInSm = heightInSm * 10;
  return heightInSm.toFixed(1)+" mm";
}
console.log(height(2)); //➞ 17.3 mm

console.log(height(5)); //➞ 43.3 mm

console.log(height(6.2)); //➞ 53.7 mm
// Notes
// Return the answer rounded to one decimal place and in the format shown in the examples above.
