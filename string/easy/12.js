// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

// Examples
function firstVowel(str) {
  //   let vowels = "aeiou";
  //   for (let i = 0; i < str.length; i++) {
  //     if (vowels.includes(str[i].toLowerCase())) {
  //       return i;
  //     }
  //   }
  return str.match(/[aeiou]/i).index;
}
console.log(firstVowel("apple")); //➞ 0
console.log(firstVowel("hello")); //➞ 1
console.log(firstVowel("STRAWBERRY")); //➞ 3
console.log(firstVowel("pInEaPPLe")); //➞ 1
// Notes
// Input will be single words.
// Characters in words will be upper or lower case.
// "y" is not considered a vowel.
// Input always contains a vowel.
