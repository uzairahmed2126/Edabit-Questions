// Scottish Screaming
// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

// Examples
function toScottishScreaming(str) {
  const uppercase = str.toUpperCase();
  let split = uppercase.split("");
  //   let result = "";
  //   for (let i = 0; i < split.length; i++) {
  //     if (
  //       split[i] === "A" ||
  //       split[i] === "I" ||
  //       split[i] === "O" ||
  //       split[i] === "U"
  //     ) {
  //       split[i] = "E";
  //     }
  //     result += split[i];
  //   }
  //   return result;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += uppercase[i].replace(/^[AIOU]/g, "E");
  }
  return result;
}
console.log(toScottishScreaming("hello world")); //➞ "HELLE WERLD"

console.log(toScottishScreaming("Mr. Fox was very naughty")); //➞ "MR. FEX WES VERY NEEGHTY"

console.log(toScottishScreaming("Butterflies are beautiful!")); //➞ "BETTERFLEES ERE BEEETEFEL!"
// Notes
// Make sure to include all punctuation that is in the original string.
// You don't need any more namespaces than are already given.
