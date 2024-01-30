function minMax(arr) {
    // return [Math.min(...arr),Math.max(...arr)]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    
      // After sorting, return [min, max]
      return [arr[0], arr[arr.length - 1]];
}
console.log(minMax([1, 2, 3, 4, 5])); //➞ [1, 5]

console.log(minMax([2334454, 5])); //➞ [5, 2334454]

console.log(minMax([1])); //➞ [1, 1]