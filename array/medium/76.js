// Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// function flickSwitch(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "flick") {
//       result.push(false);
//       break;
//     }
//     result.push(true);
//   }
//   let restFalse = arr.length - result.length;
//   for (let i = 0; i < restFalse; i++) {
//     result.push(false);
//   }
//   return result;
// }
function flickSwitch(arr) {
  let currentValue = true;
  return arr.map((item) => {
    if (item === "flick") {
      currentValue = !currentValue;
    }
    return currentValue;
  });
}
console.log(flickSwitch(["edabit", "flick", "eda", "bit"])); //➞ [true, false, false, false]
console.log(flickSwitch(["flick", 11037, 3.14, 53])); //➞ [false, false, false, false]
console.log(flickSwitch([false, false, "flick", "sheep", "flick"])); //➞ [true, true, false, false, true]
// Notes
// "flick" will always be given in lowercase.
// An array may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
