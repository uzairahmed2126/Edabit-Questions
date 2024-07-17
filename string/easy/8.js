// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
function countVowels(str) {
  let vowels = "aeiou";
  let splited = str.split("");
  return splited.reduce((acc, cur) => {
    if (vowels.includes(cur.toLowerCase())) {
      acc++;
    }
    return acc;
  }, 0);
  //   return str.match(/[aeiou]/gi).length;
}
console.log(countVowels("Celebration")); //➞ 5

console.log(countVowels("Palm")); //➞ 1

console.log(countVowels("Prediction")); //➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.
