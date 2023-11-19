function addIndexes(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(i + arr[i]);
    };
    return newArr;
}
console.log(addIndexes([0, 0, 0, 0, 0]));

console.log(addIndexes([1, 2, 3, 4, 5]));

console.log(addIndexes([5, 4, 3, 2, 1]));


// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5] 