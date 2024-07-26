// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
function uniqueSort(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  //   let res = [];
  //   for (let i = 0; i < sorted.length; i++) {
  //     if (!res.includes(sorted[i])) {
  //       res.push(sorted[i]);
  //     }
  //   }
  //   return res;
  //   let uniqueNumber = new Set(sorted);
  //   let uniqueFrom = Array.from(uniqueNumber);
  //   return uniqueFrom;
}
console.log(uniqueSort([1, 2, 4, 3])); //➞ [1, 2, 3, 4]
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); //➞ [1, 2, 3, 4]
console.log(uniqueSort([6, 7, 3, 2, 1])); //➞ [1, 2, 3, 6, 7]
// Notes
// N/A
