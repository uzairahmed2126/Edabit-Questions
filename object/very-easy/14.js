// Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// Examples
function isInRange(num, obj) {
  return num >= obj.min === num <= obj.max;
}
console.log(isInRange(4, { min: 0, max: 5 })); //➞ true
console.log(isInRange(4, { min: 4, max: 5 })); //➞ true
console.log(isInRange(4, { min: 6, max: 10 })); //➞ false
console.log(isInRange(5, { min: 5, max: 5 })); //➞ true
// Notes
// Numbers can be positive or negative, and they may not be integers.
// You can assume min <= max is always true.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
