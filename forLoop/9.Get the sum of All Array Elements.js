function getSumOfItems(arr) {
    // let store = 0;
    // for (let i = 0; arr[i]; i++) {
    //     store += arr[i];
    // }
    // return store

    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(getSumOfItems([2, 7, 4]));

console.log(getSumOfItems([45, 3, 0]));

console.log(getSumOfItems([-2, 84, 23]));
// ➞ 13
// ➞ 48
// ➞ 105