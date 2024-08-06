// Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples
function reverse(str) {
  let splited = str.split(" ");
  return splited
    .map((item) =>
      item.length >= 5 ? item.split("").reverse().join("") : item
    )
    .join(" ");
  //   let reversed = [];
  //   for (let i = 0; i < splited.length; i++) {
  //     if (splited[i].length >= 5) {
  //       reversed.push(splited[i].split("").reverse().flat().join(""));
  //     } else {
  //       reversed.push(splited[i]);
  //     }
  //   }
  //   return reversed.join(" ");
}
console.log(reverse("Reverse")); //➞ "esreveR"
console.log(reverse("This is a typical sentence.")); //➞ "This is a lacipyt .ecnetnes"
console.log(reverse("The dog is big.")); //➞ "The dog is big."
// Notes
// You can expect a valid string to be provided for each test case.
