function countOnes(arr) {
  let count = 0;
  function recursiveCount(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        recursiveCount(arr[i]);
      } else if (arr[i] === 1) {
        count++;
      }
    }
  }
  recursiveCount(arr);
  return count;
}
console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
); //➞ 1

console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
); //➞ 7

console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
); //➞ 2
