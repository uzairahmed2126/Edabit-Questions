function drop(arr, num) {
  let index = arr.slice(num)
  return index
  // num = Math.max(0,num)
  // return arr.slice(num)
}
console.log(drop([1, 2, 3], 1))
console.log(drop([1, 2, 3], 2))
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0))
