function squaresSum(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a += i*i;
    }
    return a;
}
console.log(squaresSum(3));

console.log(squaresSum(12));

console.log(squaresSum(13));
// ➞ 14
// ➞ 650
// ➞ 819
