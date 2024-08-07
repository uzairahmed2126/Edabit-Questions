// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
function replaceVowel(str) {
  let vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  // return str.replace(/[aeiou]/g, match => vowelMap[match]);
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (vowelMap.hasOwnProperty(chars[i])) {
      chars[i] = vowelMap[chars[i]];
    }
  }
  return chars.join("");
}
console.log(replaceVowel("karachi")); //➞ "k1r1ch3"
console.log(replaceVowel("chembur")); //➞ "ch2mb5r"
console.log(replaceVowel("khandbari")); //➞ "kh1ndb1r3"
// Notes
// The input will always be in lowercase.
