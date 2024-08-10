// Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples
// function filterUnique(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     let isUnique = true;
//     for (let j = 0; j < str.length; j++) {
//       if (str.indexOf(str[j]) !== str.lastIndexOf(str[j])) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       res.push(str);
//     }
//   }
//   return res;
// }
function filterUnique(arr) {
  return arr.filter((str) => {
    let charCount = {};
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (let char in charCount) {
      if (charCount[char] > 1) {
        return false;
      }
    }
    return true;
    // const charSet = new Set(str);
    // return charSet.size === str.length;
  });
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); //➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
console.log(filterUnique(["88", "999", "989", "9988", "9898"])); //➞ []
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); //➞ ["ABCDE", "BED", "BAC"]
// Notes
// N/A
