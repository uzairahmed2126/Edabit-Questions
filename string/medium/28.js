// Neutralisation
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// function neutralise(...str) {
//   const [first, second] = str;
//   if (first.length !== second.length) {
//     return "Enter valid value";
//   }
//   let res = "";
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== second[i]) {
//       res += 0;
//     } else {
//       res += first[i];
//     }
//   }
//   return res;
// }
function neutralise(...str) {
  const [first, second] = str;
  if (first.length !== second.length) {
    return "Enter valid value";
  }
  return [...first].reduce((acc, cur, index) => {
    if (cur === second[index]) {
      return acc + cur;
    } else {
      return acc + "0";
    }
  }, "");
}
console.log(neutralise("+-+", "+--")); //➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
// Examples
console.log(neutralise("--++--", "++--++")); //➞ "000000"

console.log(neutralise("-+-+-+", "-+-+-+")); //➞ "-+-+-+"

console.log(neutralise("-++-", "-+-+")); //➞ "-+00"
// Notes
// The two strings will be the same length.
