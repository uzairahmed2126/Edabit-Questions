function lessThan100(...sum) {
  let result = sum[0] + sum[1]
  if (result < 100) {
    return true
  }
  return false
// if(sum[0]+sum[1]<100){
//     return true
// }
// return false
}
console.log(lessThan100(22, 15))
console.log(lessThan100(83, 34))
console.log(lessThan100(3, 77))
