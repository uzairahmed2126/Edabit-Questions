function sortNumsAscending(arr) {
    if (arr === null) {
        return [];
    }
    // return arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortNumsAscending([1, 2, 10, 50, 5])); //➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); //➞ [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending(null)); //➞ []
console.log(sortNumsAscending([])); //➞ []