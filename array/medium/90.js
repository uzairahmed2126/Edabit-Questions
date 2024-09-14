// Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.
// Examples
// function changeTypes(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (value % 2 === 0 && typeof value === "number") {
//       if (typeof value === "number") {
//         result.push(value + 1);
//       }
//     } else if (typeof value === "string") {
//       result.push(value[0].toUpperCase() + value.slice(1) + "!");
//     } else {
//       result.push(typeof value === "number" ? value : !value);
//     }
//   }
//   return result;
// }
function changeTypes(arr) {
  return arr.reduce((acc, curr) => {
    if (typeof curr === "boolean") acc.push(!curr);
    if (curr % 2 === 0 && typeof curr === "number") acc.push(curr + 1);
    if (typeof curr === "number" && curr % 2 !== 0) acc.push(curr);
    if (typeof curr === "string")
      acc.push(curr[0].toUpperCase() + curr.slice(1) + "!");
    return acc;
  }, []);
}
console.log(changeTypes(["a", 12, true])); //➞ ["A!", 13, false]
console.log(changeTypes([13, "13", "12", "twelve"])); //➞ [13, "13!", "12!", "Twelve!"]
console.log(changeTypes([false, "false", "true"])); //➞ [true, "False!", "True!"]
// Notes
// There won't be any float values.
// You won't get strings with both numbers and letters in them.
// Although the task may be easy, try keeping your code as clean and as readable as possible!
