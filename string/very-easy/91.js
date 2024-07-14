// Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.

// Examples
function AlphabetSoup(str) {
  let result = "";
  let splited = str.split("");
  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < splited.length; j++) {
      if (splited[j] > splited[j + 1]) {
        [splited[j], splited[j + 1]] = [splited[j + 1], splited[j]];
      }
    }
  }
  return splited.join('');
}
console.log(AlphabetSoup("hello")); //➞ "ehllo"
console.log(AlphabetSoup("edabit")); //➞ "abdeit"
console.log(AlphabetSoup("hacker")); //➞ "acehkr"
console.log(AlphabetSoup("geek")); //➞ "eegk"
console.log(AlphabetSoup("javascript")); //➞ "aacijprstv"
// Notes
// You can assume numbers and punctuation symbols won't be included in test cases. You'll only have to deal with single word, alphabetic characters.
