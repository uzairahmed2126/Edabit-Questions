// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
function cardHide(str) {
    let res = '';
    for(let i =0;i<str.length;i++) {
        if(str.length-4) {
            res+="*"
        }
    }
    return res.concat(str.slice(str.length-4));
//   return str.slice(str.length - 4).padStart(str.length + 4, "*");
}
console.log(cardHide("1234123456785678")); //➞ "************5678"

console.log(cardHide("8754456321113213")); //➞ "************3213"

console.log(cardHide("35123413355523")); //➞ "**********5523"
// Examples
// Ensure you return a string.
// The length of the string must remain the same as the input.
