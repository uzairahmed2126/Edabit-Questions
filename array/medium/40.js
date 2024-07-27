// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
function numOfSubbarrays(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      result++;
    }
  }
  return result;
  // return arr.reduce((acc,cur)=>{
  //     if(cur.length) acc++;
  //     return acc
  // },0)
}
console.log(numOfSubbarrays([[1, 2, 3]])); //➞ 1
console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); //➞ 3
console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); //➞ 4
console.log(numOfSubbarrays([1, 2, 3])); //➞ 0
// Notes
// N/A
