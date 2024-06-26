// Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// Examples
function getSequence(low, high) {
  let result = [];
  let current = low;
  while (current <= high) {
    result.push(current);
    current++;
  }
  return result;
  //   for (let i = low; i <= high; i++) {
  //     result.push(i);
  //   }
  //   return result;
}
console.log(getSequence(1, 5)); //➞ [1, 2, 3, 4, 5]
console.log(getSequence(98, 100)); //➞ [98, 99, 100]
console.log(getSequence(1000, 1000)); //➞ [1000]
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
// ES6 deepening (for medium or higher level users): try to implement a one-liner function that calls a single method.
