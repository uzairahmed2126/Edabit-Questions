// Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

// Examples
function sortByLength(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length > arr[i + 1].length) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
  //   return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"])); //➞ ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"])); //➞ ["may", "april", "august", "september"]
console.log(sortByLength([])); //➞ []
// Notes
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty (see example #4).
