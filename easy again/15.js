// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples
function set(arr) {
  arr.sort((a, b) => a - b);
  //   return arr.filter((item, index) => item !== index);
  const seen = {};
  return arr.filter((element) => {
    const key = JSON.stringify(element);
    if (seen[key]) {
      return false;
    }
    seen[key] = true;
    return key;
  });
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (result.indexOf(arr[i]) === -1) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
}
console.log(set([1, 3, 3, 5, 5])); //➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])); //➞ [4]
console.log(set([5, 7, 8, 9, 10, 15])); //➞ [5, 7, 8, 9, 10, 15]
console.log(set([3, 3, 3, 2, 1])); //➞ [1, 2, 3]
// console.log(
//   set([
//     "4",
//     "4",
//     "4",
//     "4",
//     { a: 1 },
//     { a: 1 },
//     true,
//     true,
//     2,
//     2,
//     undefined,
//     undefined,
//     null,
//   ])
// ); //➞ [4]
// Notes
// For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
// See resources for a hint if you get stuck.
