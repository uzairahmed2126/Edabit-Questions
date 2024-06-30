// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples
function repeatString(str, num) {
  let result = "";
  if (typeof str !== "string") {
    return "Not A String!!";
  }
  // for(let i = 0;i<num;i++) {
  //   result += str;
  // }
  // return result;
  return str.repeat(num);
}
console.log(repeatString("Mubashir", 2)); //➞ "MubashirMubashir"
console.log(repeatString("Matt", 3)); //➞ "MattMattMatt"
console.log(repeatString(1990, 7)); //➞ "Not A String !!"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
