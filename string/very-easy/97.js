// Little Dictionary
// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

// Examples
function dictionary(str, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      result.push(arr[i]);
    }
  }
  return result;
  //   return arr.reduce((acc, cur) => {
  //     if (cur.includes(str)) {
  //       acc.push(cur);
  //     }
  //     return acc;
  //   }, []);
  //   return arr.filter((item) => {
  //     if (item.includes(str)) {
  //       return item;
  //     }
  //   });
}
console.log(dictionary("bu", ["button", "breakfast", "border"])); //➞ ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); //➞ ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); //➞ []
// Notes
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
