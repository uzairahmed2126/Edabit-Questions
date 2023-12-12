function arrIndex(arr, idx) {
    let str = '';
    let flatedArr = arr.flat();
    for (let i = 0; i < idx.length; i++) {
        str += flatedArr[idx[i] - 1];
    }
    return str;
};
const arr = [
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
];
const idx = [1, 3, 5, 8];
const result = arrIndex(arr, idx);
console.log(result);  // Output: "mbsr"