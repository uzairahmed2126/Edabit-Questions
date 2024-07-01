// Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// Examples
function amazingEdabit(str) {
  if (str.includes("edabit")) {
    return str;
  }
  let result = "";
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
      result += split[i]+' ';
    if (split[i]==="is") {
      result += "not ";
    }
  }
  return result;
  //   return str.replace('is','is not');
}
console.log(amazingEdabit("edabit is amazing.")); //➞ "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")); //➞ "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")); //➞ "Infinity is not amazing."
// Notes
// Edabit is amazing :)
