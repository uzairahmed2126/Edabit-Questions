function addUpTo(sum) {
    let total = 0;
    for (let i = 0; i <= sum; i++) {
        total +=i;
    }
    return total;
}
console.log(addUpTo(3));
// 1 + 2 + 3 = 6

console.log(addUpTo(10));
// 1 + 2 + 3 + ... + 10 = 55

console.log(addUpTo(7));
// 1 + 2 + 3 + ... + 7 = 28
// ➞ 6
// ➞ 55
// ➞ 28