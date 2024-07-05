// YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

// Examples
function uploadCount(arr, str) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].includes(str)) {
  //       count++;
  //     }
  //   }
  //   return count;
  return arr.reduce((acc, cur) => {
    if (cur.includes(str)) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); //➞ 2
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); //➞ 1
// Notes
// If you only pay attention to the month and ignore the day, the challenge will become easier.
