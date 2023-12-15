function binaryToDecimal(arr) {
    let a = 0;
    let decimalValues = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            a += decimalValues[i]
        }
    }
    return a;

}
console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]));
console.log(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]));
// ➞ 255
// ➞ 0
// ➞ 188