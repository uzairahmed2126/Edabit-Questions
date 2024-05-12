// Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
function jazzify(chords) {
  let newAr = [];
  for (let i = 0; i < chords.length; i++) {
    !chords[i].endsWith("7")
      ? newAr.push(chords[i] + "7")
      : newAr.push(chords[i]);
  }
  return newAr;
    // return chords.map((chord) => (chord.endsWith("7") ? chord : chord + "7"));
     return newAr
}
console.log(jazzify(["G", "F", "C"])); //➞ ["G7", "F7", "C7"]
console.log(jazzify(["Dm", "G", "E", "A"])); //➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])); //➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.
