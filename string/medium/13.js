// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// Examples
function makeTitle(str) {
  let result = [];
  let arr = str.split(" ");
  return arr.reduce((acc, cur) => {
    acc.push(cur[0].toUpperCase() + cur.slice(1));
    return acc;
  }, []);
  //   return arr.map((item) => item[0].toUpperCase() + item.slice(1));
  //   for (let i = 0; i < arr.length; i++) {
  //     const firstChar = arr[i][0];
  //     const word = arr[i];
  //     result.push(firstChar.toUpperCase() + word.slice(1));
  //   }
  //   return result;
  // return str
}
console.log(makeTitle("This is a title")); //➞ "This Is A Title"

console.log(makeTitle("capitalize every word")); //➞ "Capitalize Every Word"

console.log(makeTitle("I Like Pizza")); //➞ "I Like Pizza"

console.log(makeTitle("PIZZA PIZZA PIZZA")); //➞ "PIZZA PIZZA PIZZA"
// Notes
// You can expect a valid string for each test case.
// Some words may contain more than one uppercase letter (see example #4).
