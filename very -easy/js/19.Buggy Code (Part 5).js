function printArray(arr) {
  const a = [];
  for (let i = 1; i <= arr; i++) {
    // a.push(i)
    a[i - 1] = i;
  };
  return a;
};
console.log(printArray(2))
console.log(printArray(3))
console.log(printArray(6))
