// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Examples
function reverseWords(str) {
  let result = [];
  let splited = str.split(" ").reverse();
  return splited.reduce((acc, cur) => {
    if (cur !== "") {
      acc += cur + " ";
    }
    return acc;
  }, "");
  //   for (let i = splited.length - 1; i >= 0; i--) {
  //     if (splited[i] !== "") {
  //       result.push(splited[i]);
  //     }
  //   }
  //   return result.join(' ');
}
console.log(reverseWords(" the sky is blue")); //➞ "blue is sky the"
console.log(reverseWords("hello   world!  ")); //➞ "world! hello"
console.log(reverseWords("a good example")); //➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.
