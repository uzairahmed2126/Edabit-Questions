// According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.
// Examples
var array = [1, 2, 3];

function fill(array, value, start = 0, end = array.length) {
  //   let storeValue = [];
  //   for (let i = start; i < end; i++) {
  //     storeValue.push(value);
  //   }
  //   return storeValue;
  // if (start < 0) start = 0;
  // if (end > array.length) end = array.length;

  // Fill the array from start to end with the specified value
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}
console.log(fill(array, "a")); //➞ ["a", "a", "a"]
console.log(fill(Array(3), 2)); //➞ [2, 2, 2]
console.log(fill([4, 6, 8, 10], "*", 1, 3)); //➞ [4, "", "*", 10]
