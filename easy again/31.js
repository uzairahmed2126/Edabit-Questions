// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
function sortByLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].length < arr[j].length) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
  //   return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
//➞ ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
//➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"]));
//➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
