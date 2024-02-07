function filterArray(arr) {
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'number') {
    //         result.push(arr[i]);
    //     };
    // };
    // return result;
    // return arr.filter(function (element) {
    //     return typeof (element) === 'number';
    // });
    // return Array.from(arr).filter(function (item) { return typeof item === 'number' });
}
console.log(filterArray([1, 2, "a", "b"])); //➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); //➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //➞ [1, 2, 123]