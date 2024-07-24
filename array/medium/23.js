// Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples
function matchLastItem(arr) {
  //   let combined = "";
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     combined += arr[i];
  //   }
  //   let lastValue = arr.pop();
  //   return combined === lastValue;
  return arr.slice(0, arr.length - 1).join("") === arr.pop();
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //➞ true
// The last item is the rest joined.

console.log(matchLastItem([1, 1, 1, "11"])); //➞ false
// The last item should be "111".

console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //➞ true
// Notes
// The array is always filled with items.
