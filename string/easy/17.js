// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

// Examples
function hashPlusCount(str) {
  //   let hashes = 0;
  //   let pluses = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "#") {
  //       hashes++;
  //     } else if (str[i] === "+") {
  //       pluses++;
  //     }
  //   }
  //   return [hashes, pluses];
  const hashCount = (str.match(/#/g) || []).length;
  const plusCount = (str.match(/\+/g) || []).length;
  return [hashCount, plusCount];
}
console.log(hashPlusCount("###+")); //➞ [3, 1]

console.log(hashPlusCount("##+++#")); //➞ [3, 3]

console.log(hashPlusCount("#+++#+#++#")); //➞ [4, 6]

console.log(hashPlusCount("")); //➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
