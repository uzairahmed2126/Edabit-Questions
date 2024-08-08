// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// function identicalFilter(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       let str = arr[i];
//       let isSame = true;
//       for (let j = 1; j < str.length; j++) {
//         if (str[j] !== str[0]) {
//           isSame = false;
//         }
//       }
//       if (isSame) {
//         result.push(str);
//       }
//     }
//     return result;
// }
function identicalFilter(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let str = arr[i];
  //     let isSame = true;
  //     for (let j = 1; j < str.length; j++) {
  //       if (str[j] !== str[0]) {
  //         isSame = false;
  //       }
  //     }
  //     if (isSame) {
  //       result.push(str);
  //     }
  //   }
  //   return result;
  //   return arr.reduce((acc, cur) => {
  //     let isTrue = 1;
  //     let firstChar = cur[0][0];
  //     for (let i = 0; i < cur.length; i++) {
  //       if (firstChar !== cur[i]) {
  //         isTrue = 0;
  //       }
  //     }
  //     if (isTrue) {
  //       acc.push(cur);
  //     }
  //     return acc;
  //   }, []);
  //   return arr.filter((str) => {
  //     const charSet = new Set(str);
  //     return charSet.size === 1;
  //   });
}
function identicalFilter(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let firstChar = word[0];
    if (word.split("").every((char) => char === firstChar)) {
      res.push(word);
    }
  }
  return res;
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
