function drop(arr, num) {
    // return arr.slice(num);
    // return arr.splice(num);
    return arr.filter((item, index, arr) => index >= num);
}
console.log(drop([1, 2, 3], 1)); //➞ [2, 3]

console.log(drop([1, 2, 3], 2)); //➞ [3]

console.log(drop([1, 2, 3], 5)); //➞ []

console.log(drop([1, 2, 3], 0)); //➞ [1, 2, 3]


console.log(0 >= 1);//[false,true,true]
console.log(1 >= 1);//[true]
console.log(2 >= 1);//[true]