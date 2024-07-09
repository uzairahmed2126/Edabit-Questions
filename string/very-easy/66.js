// Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples
str1 = "mubashir";
str2 = "edabit";
function longestString(str1, str2) {
  let result = "";
  let combined = str1 + str2;
  let uniqueChars = new Set(combined);
  let sortedChars = Array.from(uniqueChars).sort();
  return sortedChars.join("");
  //   let sorted = combined.split("").sort().join("");
  //   for (let i = 0; i < sorted.length; i++) {
  //     let char = sorted[i];
  //     if (result.indexOf(char) === -1) {
  //       result += char;
  //     }
  //   }
  //   return result;
}
console.log(longestString(str1, str2)); //➞ "abdehimrstu"
// Contains sorted and distinct letters of the given strings.
str1 = "abcdefghijklmnopqrstuvwxyz";
str2 = "abcdefghijklmnopqrstuvwxyz";
console.log(longestString(str1, str2)); //➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.
// Notes
// N/A
