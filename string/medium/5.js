// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples
function findNemo(str) {
  let splited = str.split(" ");
  let index = 1;
  for (let i = 0; i < splited.length; i++) {
    if (splited[i].toLowerCase().includes("nemo")) {
      index += i;
    }
  }
  //   return `I found Nemo at ${index}!`;
  return `I found Nemo at ${splited.findIndex((item) => item === "Nemo") + 1}!`;
}
console.log(findNemo("I am finding Nemo !")); //➞ "I found Nemo at 4!"
console.log(findNemo("Nemo is me")); //➞ "I found Nemo at 1!"
console.log(findNemo("I Nemo am")); //➞ "I found Nemo at 2!"
// Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.
