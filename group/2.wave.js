function wave(arr) {
  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1] !== undefined) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      // arr = temp;
      // temp = arr[i];
      // reuslt.push(arr[i+1]);
    }
  }
  return arr;
}
console.log(wave([1, 2, 3, 4, 5])); //[2,1,4,3,5]
console.log(wave([5, 4, 3, 2, 1])); //[2,1,4,3,5]
console.log(wave([3, 2, 1, 5, 4])); //[2,1,4,3,5]
