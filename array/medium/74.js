// Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
function fruitSalad(arr) {
  let chunks = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let halfLength = arr[i].length / 2;
    let lengthOfVal = arr[i].length;
    let first = arr[i].slice(0, Math.floor(halfLength));
    let rest = arr[i].slice(first.length, lengthOfVal);
    chunks.push(first, rest);
  }
  return chunks.sort().join("");
}
console.log(fruitSalad(["apple", "pear", "grapes"])); //➞ "apargrapepesple"
// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
// Examples
console.log(fruitSalad(["apple", "pear", "grapes"])); //➞ "apargrapepesple"
console.log(fruitSalad(["raspberries", "mango"])); //➞ "erriesmangoraspb"
console.log(fruitSalad(["banana"])); //➞ "anaban"
// Notes
// If a fruit has an odd number of letters, make the right side larger than the left.
// For example: "apple" will be sliced into "ap" and "ple".
// All fruits will be given in lowercase.
