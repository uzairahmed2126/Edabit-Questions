// Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

// Examples
function emphasise(str) {
  let splited = str.toLowerCase().split(" ");
  let res = [];
  for (let i = 0; i < splited.length; i++) {
    if (splited[i][i].toUpperCase()) {
      res.push(splited[i].replace(splited[i][0], splited[i][0].toUpperCase()));
    }
  }
  return res.join(' ');
}
console.log(emphasise("hello world")); //➞ "Hello World"
console.log(emphasise("GOOD MORNING")); //➞ "Good Morning"
console.log(emphasise("99 red balloons!")); //➞ "99 Red Balloons!"
// Notes
// You won't run into any issues when dealing with numbers in strings.
