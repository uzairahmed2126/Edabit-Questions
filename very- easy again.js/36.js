// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
function findIndex(arr, val) {
    let index = arr.indexOf(val);
    return index;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) {
  //       return i;
  //     }
  //   }
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); //➞ 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); //➞ 1
console.log(findIndex(["a", "g", "y", "d"], "d")); //➞ 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.
