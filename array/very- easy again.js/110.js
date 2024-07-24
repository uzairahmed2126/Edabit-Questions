// Word Endings
// Create a function that adds a string ending to each member in an array.

// Examples
function addEnding(arr, str) {
  let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] + str);
  // }
  // return result;
  //   return arr.map((element) => {
  //     return element + str;
  //     return element.concat(str);
  //   });

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].concat(str));
  }
  return result;
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding(["new", "pander", "scoop"], "er"));
//➞ ["newer", "panderer", "scooper"]
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
//➞ ["bending", "sharpening", "meaning"]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
