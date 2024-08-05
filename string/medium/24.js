// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

// Examples
function doubleLetters(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === str[i + 1]) {
  //       return true;
  //     }
  //   }
  //   return false;
}
function doubleLetters(str) {
  let splited = str.split("");
  return splited.reduce((acc, cur, index) => {
    if (cur === splited[index + 1]) {
      acc = true;
    }
    return acc;
  }, false);
}
console.log(doubleLetters("loop")); //➞ true
console.log(doubleLetters("yummy")); //➞ true
console.log(doubleLetters("orange")); //➞ false
console.log(doubleLetters("munchkin")); //➞ false
// Notes
// N/A
