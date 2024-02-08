function tuckIn(arr1, arr2) {
    // return [arr1[0], ...arr2, arr1[1]];
    const uniqeArray = arr2.filter(function (item) { return !arr1.includes(item) });
    return arr1.slice(0, 1).concat(uniqeArray, arr1.slice(1));
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10,10])); //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(tuckIn([15, 150], [45, 75, 35])); //➞ [15, 45, 75, 35, 150]

console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); //➞ [[1, 2], [3, 4], [5, 6]]