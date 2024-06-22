// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples
function getOnlyEvens(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0 && i % 2 === 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  //   return arr.filter((element, index) => element % 2 === 0 && index % 2 === 0);
  return arr.reduce((acc, cur, index) => {
    if (cur % 2 === 0 && index % 2 === 0) {
      acc.push(cur);
    }
    return acc
  }, []);
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])); //➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])); //➞ []
// Notes
// Arrays start at index 0.
