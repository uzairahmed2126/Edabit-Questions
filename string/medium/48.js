// Syncopated Rhythm
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

// You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music contains any syncopation, and false otherwise.

// Examples
function hasSyncopation(rhythm) {
  //   let splited = rhythm.split(".#");
  //   return splited.includes("");
  //   for (let i = 1; i < rhythm.length; i += 2) {
  //     if (rhythm[i] === "#") {
  //       return true;
  //     }
  //   }
  //   return false;
  return [...rhythm].some((beat, index) => index % 2 !== 0 && beat === "#");
}
console.log(hasSyncopation(".#.#.#.#")); //➞ true
// There are Hash signs in the second, fourth, sixth and
// eighth positions of the string.
console.log(hasSyncopation("#.#...#.")); //➞ false
// There are no Hash signs in the second, fourth, sixth or
// eighth positions of the string.
console.log(hasSyncopation("#.#.###.")); //➞ true
// There is a Hash sign in the sixth position of the string.
// Notes
// All other unemphasized beats will be represented as a dot.
