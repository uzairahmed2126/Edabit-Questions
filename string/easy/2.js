// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples
function potatoes(str) {
  //   return str.match(/potato/g).length;
  const regex = /potato/g;
  const matches = str.matchAll(regex);
  let count = 0;

  for (const match of matches) {
    count++;
  }

  return count;
}
console.log(potatoes("potato")); //➞ 1

console.log(potatoes("potatopotato")); //➞ 2

console.log(potatoes("potatoapple")); //➞ 1
// Notes
// N/A
