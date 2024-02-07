function sumOfCubes(arr) {
    let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i] ** 3;
    // }
    // return result;
    arr.reduce(function (acc, cur) { return result = acc + cur ** 3 }, 0)
    return result
}
console.log(sumOfCubes([1, 5, 9])); //➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5])); //➞ 216
console.log(sumOfCubes([2])); //➞ 8
console.log(sumOfCubes([])); //➞ 0