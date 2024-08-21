// Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples
// function filterUnique(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     let isTure = true;
//     for (let j = 0; j < str.length; j++) {
//       if (str.indexOf(str[j]) !== str.lastIndexOf(str[j])) {
//         isTure = false;
//       }
//     }
//     if (isTure) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// function filterUnique(arr) {
//     return arr.filter((str) => {
//         const charSet = new Set(str);
//         return charSet.size === str.length;
//       });
// }
function filterUnique(arr) {
  return arr.filter((item) => {
    return item.split("").every((char, index, self) => {
      return self.indexOf(char) === self.lastIndexOf(char);
    });
  });
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); //➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
console.log(filterUnique(["88", "999", "989", "9988", "9898"])); //➞ []
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); //➞ ["ABCDE", "BED", "BAC"]
// Notes
// N/A
