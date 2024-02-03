function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        // result += arr.at(i);
        // result += arr[i];
    }
    // return result;
    // return arr.join('');
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])); //➞ "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //➞ "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); //➞ "123asdAAAA"