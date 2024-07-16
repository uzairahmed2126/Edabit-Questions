// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
function hasKey(obj, val) {
  return Object.keys(obj).includes(val);
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")); //➞ false

console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning")); //➞ false

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")); //➞ true
// Notes
// N/A
