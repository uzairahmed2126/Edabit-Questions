// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
function animals(chickens, cows, pigs) {
  let totalOfLegs = 2 * chickens + 4 * cows + 4 * pigs;
  return totalOfLegs;
}
console.log(animals(2, 3, 5)); //➞ 36
console.log(animals(1, 2, 3)); //➞ 22
console.log(animals(5, 2, 8)); //➞ 50
// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.
