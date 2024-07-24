// Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
  // 1.
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[arr.length - 1] !== arr[i]) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  //   2.
  //   return arr.filter((item) => arr[arr.length - 1] !== item);
  //3.
  //   let newArr = arr.slice(); //it will shallow copy
  //   newArr.pop();
  //   return newArr;
  //   4.
    return arr.slice(0,arr.length-1);
}
// Examples
x = [1, 2, 3, 4, 5];
console.log(minusOne(x)); //➞ [1, 2, 3, 4]  // 1st time function is called.
console.log(minusOne(x)); //➞ [1, 2, 3]  // 2nd time function is called.
console.log(minusOne(x)); //➞ [1, 2]  // 3rd time function is called.
console.log(minusOne(x)); //➞ [1]  // 4th time function is called.

// What I want instead:
console.log(minusOne(x)); //➞ [1, 2, 3, 4]  // 1st time function is called.
console.log(minusOne(x)); //➞ [1, 2, 3, 4]  // 2nd time function is called.
console.log(minusOne(x)); //➞ [1, 2, 3, 4]  // 3rd time function is called.
console.log(minusOne(x)); //➞ [1, 2, 3, 4]  // 4th time function is called.
// Notes
// N/A
