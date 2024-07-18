// Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
function reverseCase(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      res += str[i].toUpperCase();
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      res += str[i].toLowerCase();
    }
  }
  return res;
}
console.log(reverseCase("Happy Birthday")); //➞ "hAPPY bIRTHDAY"

console.log(reverseCase("MANY THANKS")); //➞ "many thanks"

console.log(reverseCase("sPoNtAnEoUs")); //➞ "SpOnTaNeOuS"
// Notes
// N/A
