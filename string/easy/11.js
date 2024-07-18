// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
function removeVowels(str) {
    let vowels = "aeiou"; // Include uppercase vowels as well
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        res += str[i];
      }
    }
    return res;
  //   return str.replace(/[aeiou]/gi,"");
}
console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);
//➞ " hv nvr sn  thn prsn drnkng Dt Ck."

console.log(removeVowels("We're gonna build a wall!"));
//➞ "W'r gnn bld  wll!"

console.log(
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
);
//➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.
