// Return Sole Element in a Set
// Given a set containing an element, return the sole element.

// Examples
function elementSet(set) {
  let iterator = set.values();
  return iterator.next().value;
}
const first = new Set();
first.add(1);
console.log(elementSet(first)); //➞ 1

const second = new Set();
second.add("apple");
console.log(elementSet(second)); //➞ "apple"

const third = new Set();
third.add(false);
console.log(elementSet(third)); //➞ false
// Notes
// Set elements may be a string, boolean or number.
