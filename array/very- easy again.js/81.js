// Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples
function arithmeticProgression(first, diff, n) {
  //   let [first,diff,n] = [arr[0], arr[1], arr[2]];
  let newArr = [];
  // newArr.push(first)
  //   return newArr
  let a = 0;
  let b = 0;
  for (let i = 0; i < n; i++) {
    newArr.push(first + i * diff);
  }
  return newArr.join(", ");
}
console.log(arithmeticProgression(1, 2, 5)); //➞ "1, 3, 5, 7, 9"
console.log(arithmeticProgression(1, 0, 5)); //➞ "1, 1, 1, 1, 1"
console.log(arithmeticProgression(1, -3, 10)); //➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
// Notes
// N/A
