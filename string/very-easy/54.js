// Secret Function 2.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples
function secret(str) {
  const num = str.split("*");
  //   let result = `<${num[0]}></${num[0]}>`.repeat(+num[num.length - 1]);
  let result = "";
  //   return result;
  for (let i = 0; i < +num[num.length - 1]; i++) {
    result += `<${num[0]}></${num[0]}>`;
  }
  return result;
}
console.log(secret("div*2")); //➞ "<div></div><div></div>"
console.log(secret("p*1")); //➞ "<p></p>"
console.log(secret("li*3")); //➞ "<li></li><li></li><li></li>"
// Notes
// Input is a string.
