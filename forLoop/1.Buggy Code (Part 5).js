
function printArray(arrayNum) {
    let storeArray = [];
    for (let i = 1; i <= arrayNum; i++) {
        storeArray.push(i);
    }
    return storeArray;
}
console.log(printArray(1))
console.log(printArray(3))
console.log(printArray(6))
// ➞ [1]
// ➞ [1, 2, 3]
// ➞ [1, 2, 3, 4, 5, 6]