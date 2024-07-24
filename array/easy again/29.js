// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples
function spelling(str) {
  //   let result = [];
  let string = "";
  //   for (let i = 0; i < str.length; i++) {
  //     string += str[i];
  //     result.push(string);
  //   }
  //   return result;
  return str.split("").reduce((acc, char) => {
    string += char;
    acc.push(string);
    return acc;
  }, []);
}
console.log(spelling("bee")); //➞ ["b", "be", "bee"]
console.log(spelling("happy")); //➞ ["h", "ha", "hap", "happ", "happy"]
console.log(spelling("eagerly")); //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
// Notes
// N/A
