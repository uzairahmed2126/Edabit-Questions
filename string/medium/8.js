// Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples
function matchLastItem(arr) {
  //   let lastItem = arr[arr.length - 1];
  //   let combinedStr = "";
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     combinedStr += arr[i];
  //   }
  //   return combinedStr === lastItem;
  const lastVal = arr.pop();
  let combinedStr = arr.join("");
  return combinedStr === lastVal;
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //➞ true
// The last item is the rest joined.
console.log(matchLastItem([1, 1, 1, "11"])); //➞ false
// The last item should be "111".
console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //➞ true
// Notes
// The array is always filled with items.
