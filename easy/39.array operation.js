function arrayOperation(x, y, n) {
    let m = x + (n - (x % n)) % n;
    let M = y - (y % n);
    let result = [];
    for (let i = m; i <= M; i += n) {
        result.push(i);
    }
    return result;
}
console.log(arrayOperation(1, 10, 3)); //➞ [3, 6, 9]
console.log(arrayOperation(7, 9, 2)); //➞ [8]
console.log(arrayOperation(15, 20, 7)); //➞ []