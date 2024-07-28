// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
function identicalFilter(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     // if (arr[i].repeat(arr[i][i], arr[i].length)) {
  //     //   result.push(arr[i]);
  //     // }

  //   }
  //   return result;
  //   const areAllCharactersSame = (str) => {
  //     const firstChar = str[0];
  //     for (let char of str) {
  //         if (char !== firstChar) {
  //             return false;
  //         }
  //     }
  //     return true;
  //     // return new Set(str).size === 1;
  //   };
  //   return arr.filter(areAllCharactersSame);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i][0];
    let isIdentical = true;
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] !== firstChar) {
        isIdentical = false;
        break;
      }
    }
    if (isIdentical) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
//➞ ["aaaaaa", "d", "eeee"]
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
//➞ ["88", "999", "22"]
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
//➞ []
// Notes
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).
