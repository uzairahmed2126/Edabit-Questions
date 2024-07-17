// Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon

// Examples
function emotify(str) {
  //   if (str.includes("smile")) {
  //     return str.replace("smile", ":D");
  //   } else if (str.includes("grin")) {
  //     return str.replace("grin", ":)");
  //   } else if (str.includes("sad")) {
  //     return str.replace("sad", ":(");
  //   }else if (str.includes("mad")) {
  //     return str.replace("mad", ":P");
  //   }
  const emoticons = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };
  return str.replace(/(smile|grin|sad|mad)/g, (match) => emoticons[match]);
}
console.log(emotify("Make me smile")); //➞ "Make me :D"

console.log(emotify("Make me grin")); //➞ "Make me :)"

console.log(emotify("Make me sad")); //➞ "Make me :("
// Notes
// The sentence always starts with "Make me".
// Try to solve this without using conditional statements like if/else or switch.
