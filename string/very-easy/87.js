// Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

// Examples
function replaceVowels(str, char) {
  const vowels = "aeiou";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += char;
    } else {
      result += str[i];
    }
  }
  return result;
  //   return str.replace(/[aeiou]/g,char);
}
console.log(replaceVowels("the aardvark", "#")); //➞ "th# ##rdv#rk"
console.log(replaceVowels("minnie mouse", "?")); //➞ "m?nn?? m??s?"
console.log(replaceVowels("shakespeare", "*")); //➞ "sh*k*sp**r*"
// Notes
// All characters will be in lower case.
