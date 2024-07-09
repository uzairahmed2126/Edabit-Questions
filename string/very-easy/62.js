// Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples
function keyboardMistakes(str) {
  let result = "";
  let split = str.split("");
  for (let i = 0; i < split.length; i++) {
    if (split[i] === "4") {
      result += "A";
    } else if (split[i] === "5") {
      result += "S";
    } else if (split[i] === "0") {
      result += "O";
    } else if (split[i] === "1") {
      result += "I";
    } else {
      result += split[i];
    }
  }
  return result;
}
console.log(keyboardMistakes("MUB45H1R")); //➞ "MUBASHIR"
console.log(keyboardMistakes("DUBL1N")); //➞ "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE")); //➞ "SINGAPORE"
// Notes
// N/A
