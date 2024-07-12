// Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Examples
function numberSyllables(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      count++;
    }
  }
  return count;
  //   return str.split("-").length;
}
console.log(numberSyllables("buf-fet")); //➞ 2
console.log(numberSyllables("beau-ti-ful")); //➞ 3
console.log(numberSyllables("mon-u-men-tal")); //➞ 4
console.log(numberSyllables("on-o-mat-o-poe-ia")); //➞ 6
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
