// What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
function detectWord(str) {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
  //       result += str[i];
  //     }
  //   }
  //   return result;
  // return str.match(/[a-z]/g).join('');
  return str.replace(/[A-Z]/g, "");
}
console.log(detectWord("UcUNFYGaFYFYGtNUH")); //➞ "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); //➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); //➞ "embezzlement"
// Notes
// N/A
