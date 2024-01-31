function reverse(arr) {
    // return arr.reverse();
    // return arr.reduceRight((acc, curr) => { acc.push(curr); return acc; }, []);
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
// console.log(reverse([1, 2, 3, 4])); //➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])); //➞ [4, 3, 2, 9, 9]
// console.log(reverse([])); //➞ []

// 5-1 = 4 >= 0 4-- =5  [9]
// 4-1 = 3 >= 0 3-- =4  [9]
// 3-1 = 2 >= 0 2-- =3  [2]
// 2-1 = 1 >= 0 1-- =2  [3]
// 1-1 = 0 >= 0 0-- =1  [3]


let arr1 = [23, 344, 3, 2];
let result1 = []
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(result1.push(arr1[i]));
}
