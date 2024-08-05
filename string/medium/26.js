// Maskify the String
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// Examples
function maskify(fullNumber) {
  //   const last4Digits = fullNumber.slice(-4);
  //   const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
  //   return maskedNumber;
  let maskedNumber = "";
  for (let i = 0; i < fullNumber.length; i++) {
    if (i >= fullNumber.length - 4) {
      maskedNumber += fullNumber[i];
    } else {
      maskedNumber += "#";
    }
  }
  return maskedNumber;
}
console.log(maskify("4556364607935616")); //➞ "############5616"

console.log(maskify("64607935616")); //➞ "#######5616"

console.log(maskify("1")); //➞ "1"

console.log(maskify("")); //➞ ""
// Notes
// The maskify function must accept a string of any length.
// An empty string should return an empty string (fourth example above).
