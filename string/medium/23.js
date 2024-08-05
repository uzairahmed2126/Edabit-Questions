// Finish the Sentence You're On!
// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// function timeToFinish(str, words) {
//   let stringLength = 0;
//   let wordsLength = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!str[i].includes(" ")) {
//       stringLength++;
//     }
//   }
//   for (let i = 0; i < words.length; i++) {
//     if (!words[i].includes(" ")) {
//       wordsLength++;
//     }
//   }
//   const missedChars = stringLength - wordsLength;
//   return 0.5 * missedChars;
// }
// Worked Example
function timeToFinish(str, words) {
  let filteredChars = str.slice(words.length);
  let res = "";
  for (let i = 0; i < filteredChars.length; i++) {
    if (!filteredChars[i].includes(" ")) {
      res += filteredChars[i];
    }
  }
  const missedChars = res.length;
  return 0.5 * missedChars;
}
console.log(
  timeToFinish(
    "And so brings my conclusion to its conclusion.",
    "And so brings my conclusion to"
  )
); //➞ 7

// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
// Examples
console.log(
  timeToFinish(
    "And so brings my conclusion to its conclusion.",
    "And so brings my conclusion to its conclus"
  )
); //➞ 2

console.log(
  timeToFinish("As a result, my point is still valid.", "As a result, my")
); //➞ 9

console.log(timeToFinish("Thank you for reading my essay.", "T")); //➞ 12.5
// Notes
// The unfinished sentence is always found at the start of a complete sentence.
