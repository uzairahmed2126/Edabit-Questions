// Enharmonic Equivalents
// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

// C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

// Examples
function getEquivalent(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "#") {
      result += "b";
    } else if (char === "D") {
      result += "E";
    } else if (char === "G") {
      result += "F";
    } else if (char === "B") {
      result += "A";
    } else if (char === "b") {
      result += "#";
    }
  }
  return result;
}
console.log(getEquivalent("D#")); //➞ "Eb"
console.log(getEquivalent("Gb")); //➞ "F#"
console.log(getEquivalent("Bb")); //➞"A#"
// Notes
// Note names will always be a capital letter followed by either # or b.
// Remember that the note after G is A and vice versa.
