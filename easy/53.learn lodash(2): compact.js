// Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
function compact(dataTypes) {
  //   return dataTypes.reduce((acc, value) => {if (value) {acc.push(value);}return acc;},[]);
  //   let result = [];
  //   for (let i = 0; i < dataTypes.length; i++) {
  //     if (dataTypes[i]) {
  //       result.push(dataTypes[i]);
  //     }
  //   }
  //   return result;
  return dataTypes.filter((value) => {
    if (value) {
      return value;
    }
  });
}
console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]
