function numberSplit(num) {
    let half = Math.floor(num / 2);
    // if (num % 2 !== 0) {
    //     return [half, half + 1];
    // } else {
    //     return [half, half];
    // }
    let result = [];
    for (let i = 0; i < 1; i++) {
        if (num % 2 !== 0) {
            result.push(half, half + 1)
        } else {
            result.push(half, half)
        }
    }
    return result;
}
console.log(numberSplit(4)); //➞ [2, 2]
console.log(numberSplit(10)); //➞ [5, 5]
console.log(numberSplit(11)); //➞ [5, 6]
console.log(numberSplit(-9)); //➞ [-5, -4]