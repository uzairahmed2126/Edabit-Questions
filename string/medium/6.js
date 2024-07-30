// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
function capToFront(str) {
  let splited = str.split("");
  // return splited
  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < splited.length; j++) {
      if (splited[j] > splited[j + 1]) {
        [splited[j], splited[j + 1]] = [splited[j + 1], splited[j]];
      }
    }
  }
  return splited.join('');
}
console.log(capToFront("hApPy")); //➞ "APhpy"

console.log(capToFront("moveMENT")); //➞ "MENTmove"

console.log(capToFront("shOrtCAKE")); //➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.
