// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
function halfQuarterEighth(num) {
  let array = [];
  const half = num / 2;
  const quarter = half / 2;
  const eighth = quarter / 2;
  array.push(half);
  array.push(quarter);
  array.push(eighth);
  return array;
}
console.log(halfQuarterEighth(6)); //➞ [3, 1.5, 0.75]
console.log(halfQuarterEighth(22)); //➞ [11, 5.5, 2.75]
console.log(halfQuarterEighth(25)); //➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.
