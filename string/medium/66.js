// Cycling Through Strings
// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

// Examples
function stringCycling(str1, str2) {
  let first = str1.length;
  let second = str2.length;
  // let total = first > second ? first - second : second - first;
  // //   return total;
  // let sliced = str1.slice(0, second);
  // let sliced2 = str1.slice(total);
  // return sliced2
  // return second > first ? sliced + sliced2 : sliced;
  let result;
  if (first > second) {
    result = str1.slice(0, second - first);
  } else {
    result = str1.slice(0, first) + str1.slice(0, second - first);
    // result=result.
  }
  return result;
}

console.log(stringCycling("abc", "hello")); //➞ "abcab"
console.log(stringCycling("programming", "edabit")); //➞ "progra"
console.log(
  stringCycling("the world in me evolves in hers", "i love Tesh, so much so")
); //➞ "the world in me evolves"
console.log(
  stringCycling("a thing of beauty is a joy forever", "indulge me surely")
); //➞ "a thing of beauty"
console.log(stringCycling("to", "hide")); //➞ "toto"
console.log(stringCycling("such a feeling coming over me", "top of the world")); //➞ "such a feeling c"
// Notes
// All tests will include valid strings.
