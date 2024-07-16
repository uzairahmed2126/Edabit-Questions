// Burglary Series (07): Make a Copy
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

// Examples
function obj(val) {
  let copy = {};
  for (const key in val) {
    copy[key] = val[key];
  }
  return copy;
}
console.log(obj({ piano: 100, tv: 50 })); //➞ { piano: 100, tv: 50 }
// Notes
// I'm having trouble coming up with clear examples for this challenge. If you have suggestions please leave a comment. Many thanks!
