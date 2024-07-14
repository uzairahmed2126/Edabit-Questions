// Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
  //   return str.replace(/[aeiou]/g, "");
  let vowels = "aeiou";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += "";
    } else {
      result += str[i];
    }
  }
  return result;
}
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// Examples
console.log(removeVowels("candy")); //➞ "cndy"
console.log(removeVowels("hello")); //➞ "hllo"
// The "e" is removed, but the "o" is still there!
console.log(removeVowels("apple")); //➞ "pple"
// Notes
// All letters will be lowercase.
