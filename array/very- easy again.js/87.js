// Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
function countUppercase(words) {
  //   let count = 0;
  //   for (let i = 0; i < words.length; i++) {
  //     let word = words[i];
  //     for (let j = 0; j < word.length; j++) {
  //       let char = word[j];
  //       if (char >= "A" && char <= "Z") {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;
  return words
    .join("")
    .split("")
    .filter((element) => element >= "A" && element <= "Z").length;
}
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])); //➞ 6
console.log(countUppercase(["little", "lower", "down"])); //➞ 0
console.log(countUppercase(["EDAbit", "Educate", "Coding"])); //➞ 5
// Notes
// Check the Resources for some array methods that might be helpful.
// This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make our Uppercase counter broken in a few other ways.
// A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).
