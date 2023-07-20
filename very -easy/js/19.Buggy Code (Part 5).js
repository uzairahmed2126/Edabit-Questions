function printArray(arr) {
  const a = []
  for (let i = 1; i <= arr; i++) {
    a.push(i)
  }
  return a
  // return newarr.forEach(element => {
  //     element
  // });
}
console.log(printArray(1))
console.log(printArray(3))
console.log(printArray(6))
