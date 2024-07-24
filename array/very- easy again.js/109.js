// Fix the Error / Comparing Arrays (Part #2)
// Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.

// To solve this question, your friend initially wrote the following code (see this challenge):

// function checkEquals(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// If you're unsure why the above code doesn't work, I recommend doing that challenge first.

// Your friend did some more research and he fixed the code into the following:

function checkEquals(arr1, arr2) {
  //   if (arr1.length === arr2.length) {
  //     for (let i = 0; i < arr1.length; i++) {
  //       if (arr1[i] !== arr2[i]) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  let result = true;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      result = false;
    }
  });
  return result;
}
// It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

// Examples
console.log(checkEquals([1, 2], [1, 3])); //➞ false
console.log(checkEquals([1, 2], [1, 2])); //➞ true
console.log(checkEquals([4, 5, 6], [4, 5, 6])); //➞ true
console.log(checkEquals([4, 7, 6], [4, 5, 6])); //➞ false
console.log(checkEquals([1, 12], [11, 2])); //➞ false
// Notes
// N/A
