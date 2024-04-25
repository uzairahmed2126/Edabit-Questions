function sliceSum(arr, start, n) {
  //   let a = 0;
  //   for (let i = start; i < n; i++) {
  //     a += arr[i];
  //   }
  //   return a;

//   let a = arr.slice(0, n);
//   let res = 0;
//   let total = a.forEach((element) => {
//     res += element;
//   });
//   return res;
}
console.log(sliceSum([1, 3, 2], 2)); //➞ 4
console.log(sliceSum([4, 2, 5, 7], 4)); //➞ 18
console.log(sliceSum([3, 6, 2], 0)); //➞ 0
