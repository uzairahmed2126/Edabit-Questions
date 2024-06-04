// Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
function filterArray(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number") {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  //   return arr.filter((element) => typeof element === "number");
}
console.log(filterArray([1, 2, 3, "a", "b", 4])); //➞ [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); //➞ [0, 1729]
console.log(filterArray(["Nothing", "here"])); //➞ []
// Notes
// N/A
