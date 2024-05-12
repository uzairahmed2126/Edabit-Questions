// Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Example
function keyboardMistakes(val) {
  //   const corrections = {
  //     4: "A",
  //     5: "S",
  //     0: "O",
  //     1: "I",
  //   };
  //   let correctedTxt = "";
  //   for (let i = 0; i < val.length; i++) {
  //     let char = val[i];
  //     correctedTxt += corrections[char] ? corrections[char] : char;
  //   }
  //   return correctedTxt;
  return val
    .replace(/4/g, "A")
    .replace(/5/g, "S")
    .replace(/0/g, "O")
    .replace(/1/g, "I");
}
console.log(keyboardMistakes("MUB45H1R")); //➞ "MUBASHIR"
console.log(keyboardMistakes("DUBL1N")); //➞ "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE")); //➞ "SINGAPORE"
// Notes
// N/A
