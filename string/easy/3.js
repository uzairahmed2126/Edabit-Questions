// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
function charCount(char, str) {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (char === str[i]) {
  //       count++;
  //     }
  //   }
  //   return count;
  let split = str.split("");
  return split.reduce((acc, cur) => {
    if (cur === char) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(charCount("a", "edabit")); //➞ 1
console.log(charCount("c", "Chamber of secrets")); //➞ 1
console.log(charCount("b", "big fat bubble")); //➞ 4
// Notes
// Your output must be case-sensitive (see second example).
