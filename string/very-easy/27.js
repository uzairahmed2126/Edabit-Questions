// Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

// Examples
function stutter(str) {
  //   let repeat = str.slice(0,2)+'... ';
  // return repeat.repeat(2)+str+"?"
  let result = "";
  let finalResult = [];
  result += `${str[0] + str[1]}...`;
  for (let i = 0; i < 2; i++) {
    finalResult.push(result);
  }
  return `${finalResult.join(" ")} ${str}?`;
}
console.log(stutter("incredible")); //➞ "in... in... incredible?"
console.log(stutter("enthusiastic")); //➞ "en... en... enthusiastic?"
console.log(stutter("outstanding")); //➞ "ou... ou... outstanding?"
// Notes
// Assume all input is in lower case and at least two characters long.
