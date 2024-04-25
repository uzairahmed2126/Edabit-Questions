function countOnes(arr) {
  let flatedArr = arr.flat();
  let res = 0;
  for (let i = 0; i < flatedArr.length; i++) {
    if (flatedArr[i] === 1) {
      res += flatedArr[i];
    }
  }
  return res;
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
