// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// function keysAndValues(obj) {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);
//   return [keys, values];
// }
function keysAndValues(obj) {
  let entries = Object.entries(obj);
  let keys = [];
  let values = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][0]) {
      keys.push(entries[i][0]);
    }
  }
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1]) {
      values.push(entries[i][1]);
    }
  }
  return [keys, values];
  //   let keys = entries.map((entry) => entry[0]);
  //   let values = entries.map((entry) => entry[1]);
  return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//➞ [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
//➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.
