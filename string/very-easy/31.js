// Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
function countSyllables(str) {
  let string = str.trim().toLowerCase();
  // return string.length/2;
  let count = 0;
  for (let i = 0; i < string.length; i += 2) {
    count++;
  }
  return count;
}
console.log(countSyllables("Hehehehehehe")); //➞ 6
console.log(countSyllables("bobobobobobobobo")); //➞ 8
console.log(countSyllables("NANANA")); //➞ 3
// Notes
// For simplicity, please note that each syllable will consist of two letters only.
// Your code should accept strings of any case (upper, lower and mixed case).
