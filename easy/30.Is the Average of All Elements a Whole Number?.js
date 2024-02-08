function isAvgWhole(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    const average = sum / arr.length;
    return Number.isInteger(average);
    // const sum = arr.reduce((acc, num) => acc + num, 0);
    // const average = sum / arr.length;
    // return Number.isInteger(average);
};
console.log(isAvgWhole([1, 3])); //➞ true
console.log(isAvgWhole([1, 2, 3, 4])); //➞ false
console.log(isAvgWhole([1, 5, 6])); //➞ true
console.log(isAvgWhole([1, 1, 1])); //➞ true
console.log(isAvgWhole([9, 2, 2, 5])); //➞ false
