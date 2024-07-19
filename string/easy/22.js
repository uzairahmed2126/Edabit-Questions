// Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// Examples
function checkTitle(str) {
  let splited = str.split(" ");
  for (let i = 0; i < splited.length; i++) {
    // if (
    //   splited[i][0].charCodeAt(0) >= 97 &&
    //   splited[i][0].charCodeAt(0) <= 122
    // ) {
    //   return false;
    // }
    if(splited.includes(splited[i][0].toUpperCase())) {
        return true
    }
  }
  return false;
}
console.log(checkTitle("A Mind Boggling Achievement")); //➞ true

console.log(checkTitle("A Simple Java Script Program!")); //➞ true

console.log(checkTitle("Water is transparent")); //➞ false
// Notes
// N/A
