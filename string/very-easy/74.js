// Get Word Count
// Create a function that takes a string and returns the word count. The string will be a str.

// Examples
function countWords(str) {
  //   let splited = str.split(" ");
  //   return splited.length;
  //   let result = [];
  let wordCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
      wordCount++;
    }
    // if (str[i] === " ") {
    //   result.push(str[i]);
    // }
  }
  //   return result.length + 1;
  return wordCount;
}
console.log(countWords("Just an example here move along")); //➞ 6
console.log(countWords("This is a test")); //➞ 4
console.log(countWords("What an easy task, right")); //➞ 5
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
