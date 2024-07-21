// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples
function spelling(str) {
  // let arr = [];
  // let string = "";
  // for (let i = 0; i < str.length; i++) {
  //   string += str[i];
  //   arr.push(string);
  // }
  // return arr;
  let splited = str.split("");
  let maped = splited.reduce(
    (acc, cur) => {
      let current = (acc[0] += cur);
      acc.push(current);
      return acc;
    },
    [""]
  );
  return maped.slice(1, splited.length + 1);
}
console.log(spelling("bee")); //➞ ["b", "be", "bee"]

console.log(spelling("happy")); //➞ ["h", "ha", "hap", "happ", "happy"]

console.log(spelling("eagerly")); //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
// Notes
// N/A
