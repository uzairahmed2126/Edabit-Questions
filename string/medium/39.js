// Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

// Examples
// function unrepeated(str) {
//   let filteredString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) {
//       filteredString += str[i];
//     }
//   }
//   return filteredString;
// }
function unrepeated(str) {
  let splited = str.split("");
  return splited.reduce((acc, cur, index) => {
    if (cur !== splited[index + 1]) {
      acc += cur;
    }
    return acc;
  }, "");
}
console.log(unrepeated("hello")); //➞ "helo"
console.log(unrepeated("aaaaa")); //➞ "a"
console.log(unrepeated("WWE!!!")); //➞ "WE!"
console.log(unrepeated("call 911")); //➞ "cal 91"
// Notes
// No more than two words will be passed.
// Try to use new data type introduced in ES6.
// Notice that a string is iterable.
