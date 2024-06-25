// Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples

function compact(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (Boolean(arr[i]) !== false) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  return arr.reduce((acc, cur) => {
    if (Boolean(cur) !== false) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
