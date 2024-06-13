// X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// Examples
function convertCartesian(xCoords, yCoords) {
  //   let result = [];
  //   for (let i = 0; i < xCoords.length; i++) {
  //     result.push([xCoords[i], yCoords[i]]);
  //   }
  //   return result;
  //   return xCoords.map((x, i) => [x, yCoords[i]]);
  return xCoords.reduce((acc, x, i) => {
    acc.push([x, yCoords[i]]);
    return acc;
  }, []);
}
console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
//➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
//➞ [[9, 1], [8, 1], [3, 1]]
// Notes
// x and y arrays will always be the same length.
