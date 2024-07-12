// Count the Capital Letters
// Given a string of letters, how many capital letters are there?

// Examples
function capitalLetters(str) {
  let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     let char = str[i];
  //     if (/[A-Z]/.test(char)) {
  //       count++;
  //     }
  //   }
  //   return count;
  //   let splited = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      count++;
    }
  }
  return count;
}
console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); //➞ 6
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); //➞ 14
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); //➞ 0
// Notes
// N/A
