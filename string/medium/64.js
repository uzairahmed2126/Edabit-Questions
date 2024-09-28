// The Million Dollar Fence
// Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

// Create a function which constructs this pricey pricey fence, using the letter "H" to build.
function constructFence(dollar) {
  let total = 1000000;
  let amount = "";
  let splited = dollar.split("");
  let result = "";
  for (let i = 0; i < splited.length; i++) {
    let char = splited[i];
    if (char !== "$" && char !== ",") {
      amount += char;
    }
  }
  let fence = total / amount;
  for (let i = 0; i < fence; i++) {
    result += "H";
  }
  return result;
}
console.log(constructFence("$50,000")); //➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
console.log(constructFence("$50,000")); //➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
console.log(constructFence("$100,000")); //➞ "HHHHHHHHHH"
console.log(constructFence("$1,000,000")); //➞ "H"
// Notes
// You are ordered to spend all of your $1,000,000 budget...
