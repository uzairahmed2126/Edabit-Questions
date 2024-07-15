// Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
function volumeOfBox(obj) {
  //   ({ width, length, height } = obj);
  //   return width * length * height;
  let values = Object.values(obj);
  return values[0] * values[1] * values[2];
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); //➞ 10
console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); //➞ 16
console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); //➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.
