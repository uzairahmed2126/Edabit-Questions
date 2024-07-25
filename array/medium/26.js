// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
function factorChain(arr) {
    if (arr[0] > arr[1]) return false;
  let devidend = arr[1] / arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] / arr[i] === devidend) {
      return true;
    }
  }
  return false;
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i + 1] % arr[i] !== 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  //   for (let i = 0; i < arr.length; i += 2) {
  //     if (arr[i] % arr[i + 1] === 0) {
  //       return true;
  //     }
  //   }
  //   return false;
}
console.log(factorChain([1, 2, 4, 8, 16, 32])); //➞ true
console.log(factorChain([1, 1, 1, 1, 1, 1])); //➞ true
console.log(factorChain([2, 4, 6, 7, 12])); //➞ false
console.log(factorChain([10, 1])); //➞ false
// Notes
// N/A
