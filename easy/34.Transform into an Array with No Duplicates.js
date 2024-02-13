function set(arr) {
    arr.sort((a, b) => { return a - b });
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
        // for (let j = 0; j < arr.length - i - 1; j++) {
        //     if (arr[j] > arr[j + 1]) {
        //         let temp = arr[j];
        //         arr[j] = arr[j + 1];
        //         arr[j + 1] = temp;
        //     }
        // }
    }
    return result;
}
console.log(set([1, 3, 3, 5, 5])); //➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])); //➞ [4]
console.log(set([5, 7, 8, 9, 10, 15])); //➞ [5, 7, 8, 9, 10, 15]
console.log(set([3, 3, 3, 2, 1])); //➞ [1, 2, 3]