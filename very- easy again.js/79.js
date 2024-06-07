// Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// Examples
function findFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(9)); //➞ [1, 3, 9]
// 9 has three factors 1, 3 and 9
console.log(findFactors(12)); //➞ [1, 2, 3, 4, 6, 12]
console.log(findFactors(20)); //➞ [1, 2, 4, 5, 10, 20]
console.log(findFactors(0)); //➞ []
// 0 has no factors
// Notes
// Return an empty array if the given number is less than 1.
