// All Numbers in Array Are Prime
// Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.

// Examples
function allPrime(arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number <= 1) {
      return result;
    }
    if (number === 2) result = true;
    if (number > 2 && number % 2 === 1) return result;
  }
  return result;
}
function allPrime(arr) {
  let result = false;
  return arr.reduce((acc, number) => {
    if (number <= 1) {
      return result;
    }
    if (number === 2) result = true;
    if (number > 2 && number % 2 === 1) return result;
    return acc;
  }, false);
}
console.log(allPrime([7, 5, 2, 4, 6])); //➞ false
console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29])); //➞ true
console.log(allPrime([1, 5, 3])); //➞ false
// Notes
// 1 is not a prime number.
