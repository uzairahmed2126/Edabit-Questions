// Format Number with Comma(s) Separating Thousands
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

// Examples
function formatNum(number) {
  // return num.toLocaleString();
  // let numStr = number.toString();
  // let result = "";
  // for (let i = numStr.length - 1, count = 1; i >= 0; i--, count++) {
  //   result = numStr[i] + result;
  //   if (count % 3 === 0 && i !== 0) {
  //     result = "," + result;
  //   }
  // }
  // return result;
  let arr = String(number).split("").reverse();
  let res = "";
  let countDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    countDigits++;

    res = arr[i] + res;
    if (countDigits % 3 === 0 && i < arr.length - 1) {
      res = "," + res;
    }
  }
  return res;
  // return arr.reduce((acc,cur)=>{

  // })
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "1000") {
  //     return "1,000";
  //   } else if (arr[i] === "100000") {
  //     return "100,000";
  //   }
  // }
  // return arr[0];
}
console.log(formatNum(1000)); //➞ "1,000"
console.log(formatNum(100000)); //➞ "100,000"
console.log(formatNum(20)); //➞ "20"
// Notes
// You can expect a valid number for all test cases.
