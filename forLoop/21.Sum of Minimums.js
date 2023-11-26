function sumMinimums (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i][0];
  };
  return sum;
};
console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
  ]) );
//   ➞ 26
  
  // minimum value of the first row is 1
  // minimum value of the second row is 5
  // minimum value of the third row is 20