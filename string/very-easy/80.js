// Hamming Distance
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

// Examples
function hammingDistance(str1, str2) {
  let differChar = "";
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    if (char1 !== char2) {
      differChar += char2;
    }
  }
  return differChar.length;
}
console.log(hammingDistance("abcde", "bcdef")); //➞ 5
console.log(hammingDistance("abcde", "abcde")); //➞ 0
console.log(hammingDistance("strong", "strung")); //➞ 1
// Notes
// Both strings will have the same length.
