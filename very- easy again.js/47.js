// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
function arrayValuesTypes(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(typeof arr[i]);
  //   }
  //   return result;
    return arr.map((elements) => typeof elements);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
//➞ ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
//➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples
