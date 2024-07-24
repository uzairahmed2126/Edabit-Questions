// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
function findLargestNums(arr) {
  //    arr.flat().sort((a, b) => a - b);
  // return [Math.max(...arr[0]), Math.max(...arr[1]), Math.max(...arr[2])];
  //   return arr.map((item) => Math.max(...item));
  return arr.reduce((acc, cur) => {
    acc.push(Math.max(...cur));
    return acc;
  }, []);
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
); //➞ [7, 90, 2]
console.log(
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
); //➞ [-34, -2, 7]
console.log(
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
); //➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).
