// Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// Examples
function getCase(str) {
  const lettersOnly = str.replace(/[^a-zA-Z]/g, "");
  if (lettersOnly === lettersOnly.toUpperCase()) {
    return "upper";
  } else if (lettersOnly === lettersOnly.toLowerCase()) {
    return "lower";
  }
  return "mixed";
  //   let split = str.split("");
  //   return split.reduce((acc, cur, index) => {
  //     if (cur.charCodeAt(index) > 97 && cur.charCodeAt(index) < 122) {
  //       acc = "lower";
  //     }
  //     cur.charCodeAt(index) > 65 && cur.charCodeAt(index) < 90
  //     return acc;
  //   }, "");
  //   return 'azAZ'.charCodeAt(3)
}
console.log(getCase("whisper...")); //➞ "lower"
console.log(getCase("SHOUT!")); //➞ "upper"
console.log(getCase("Indoor Voice")); //➞ "mixed"
// Notes
// Ignore punctuation, spaces and numbers.
