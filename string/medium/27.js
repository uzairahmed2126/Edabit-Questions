// Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

// Examples
function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }
  let parts = email.split("@");
  let localPart = parts[0];
  let domainPart = parts[1];
  if (localPart === "") {
    return false;
  }
  if (!domainPart.includes(".")) {
    return false;
  }
  let lastDotPosition = domainPart.lastIndexOf(".");
  if (lastDotPosition < 1 || lastDotPosition >= domainPart.length - 1) {
    return false;
  }
  return domainPart;
}
// function validateEmail(email) {
//   let splited = email.split("@");
//   if (
//     splited[0] === "gmail" ||
//     splited[0] === "" ||
//     !splited[1].includes(".com")
//   ) {
//     return false;
//   } else if (splited[0].includes(".")) {
//     return false;
//   } else if (splited[1].includes(".com")) {
//     return true;
//   }
//   return "write valid email";
// }
console.log(validateEmail("@gmail.com")); //➞ false
console.log(validateEmail("hello.gmail@com")); //➞ false
console.log(validateEmail("gmail")); //➞ false
console.log(validateEmail("hello@gmail")); //➞ false
console.log(validateEmail("hello@edabit.com")); //➞ true
// Notes
// Check the Tests tab to see exactly what's being evaluated.
// You can solve this challenge with RegEx, but it's intended to be solved with logic.
// Solutions using RegEx will be accepted but frowned upon :(
