// Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples
function secret(str) {
  let splited = str.split(".");
  let tag = splited[0];
  let ar = [];
  for (let i = 1; i < splited.length; i++) {
    let char = splited[i];
    if(str.includes('.')) {
        ar.push(char);
    }
  }
  return `<${tag + ` class="${ar.join(" ")}"`}></${tag}>`;
}
console.log(secret("p.one.two.three")); //➞ `<p class="one two three"></p>`
console.log(secret("p.one")); //➞ `<p class="one"></p>`
console.log(secret("p.four.five")); //➞ `<p class="four five"></p>`
// Notes
// Input is a string.
