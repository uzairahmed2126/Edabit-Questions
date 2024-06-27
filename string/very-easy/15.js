// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Examples
function InewWord(str) {
  // let result  = '';
  // for(let i = 1;i<str.length;i++) {
  //   result +=str[i]
  // }
  // return result
  return str.substring(1);
}
console.log(InewWord("apple")); //➞ "pple"
console.log(InewWord("cherry")); //➞ "herry"
console.log(InewWord("plum")); //➞ "lum"
// Notes
// The input is always a valid word.
