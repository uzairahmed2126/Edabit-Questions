// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples
function spelling(str) {
  let storeInArray = [];
  let string = "";
  str += string;
  for (let i = 0; i < str.length; i++) {
    storeInArray.push(str.slice(0, i + 1));
  }
  return storeInArray;
  //   return str.split("").map((_, item) => {
  //     return str.slice(0, item + 1);
  //   });
}
console.log(spelling("bee")); //➞ ["b", "be", "bee"]
console.log(spelling("happy")); //➞ ["h", "ha", "hap", "happ", "happy"]
console.log(spelling("eagerly")); //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
console.log(spelling(1, 2, 3, 4, 5)); //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
