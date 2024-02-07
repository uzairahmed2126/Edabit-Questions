function canNest(arr1, arr2) {
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] === arr2[j]) {
    //             return false;
    //         };
    //     };
    // };
    // return true;
    const minArr1 = Math.min(...arr1);
    const maxArr1 = Math.max(...arr1);
    const minArr2 = Math.min(...arr2);
    const maxArr2 = Math.max(...arr2);
    // return arr1.reduce((acc, num) => acc && (num > minArr2 && num < maxArr2), true);
    // return arr1.every((item) => item > minArr2 && item < maxArr2);
    return arr1.some((item) => item > minArr2 && item < maxArr2);
}
console.log(canNest([1, 2, 3, 4], [0, 6])); //➞ true
console.log(canNest([3, 1], [4, 0])); //➞ true
console.log(canNest([9, 9, 8], [8, 9])); //➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])); //➞ false
