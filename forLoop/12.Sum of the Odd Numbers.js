function addOddToN(odd) {
    let a = 0;
    for (let i = 1; i <= odd; i++) {
        if (i % 2 !== 0) {
            a += i;
        }
    }
    return a;
}
console.log(addOddToN(5));
// 1 + 3 + 5 = 9
console.log(addOddToN(13));
console.log(addOddToN(47));

// ➞ 9
// ➞ 49
// ➞ 576
