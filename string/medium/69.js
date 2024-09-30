// Apples and Bananas
// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// Examples
function vreplace(str, vowel) {
  let vowels = "aeiou";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) {
      result += char;
    } else {
      result += vowel;
    }
  }
  return result;
}
console.log(vreplace("apples and bananas", "u")); //➞ "upplus und bununus"
console.log(vreplace("cheese casserole", "o")); //➞ "chooso cossorolo"
console.log(vreplace("stuffed jalapeno poppers", "e")); //➞ "steffed jelepene peppers"
// Notes
// All words will be lowercase.
// "Y" is not considered a vowel.
