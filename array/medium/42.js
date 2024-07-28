// Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
function zipIt(arr1, arr2) {
  let result = [];
  if (arr1.length !== arr2.length) {
    return "sizes don't match";
  } else {
    return arr1.reduce((acc, cur, index) => {
      acc.push([cur, arr2[index]]);
      return acc;
    }, []);
    // for (let i = 0; i < arr1.length; i++) {
    //   result.push([arr1[i], arr2[i]]);
    // }
  }
  //   return result;
}
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
//➞ [["Elise", "John"], ["Mary", "Rick"]]

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
//➞ "sizes don't match"

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
//➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
// Notes
// N/A
