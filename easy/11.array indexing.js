function valueAt(arr, index) {
    // return arr[Math.floor(index)];
    // return arr[parseInt(index)];
    // return arr[Math.round(index)];
    return arr[~~index]
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); //➞ 6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); //➞ 5
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); //➞ 4