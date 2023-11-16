function calculateExponent(baseNum, exponentNum) {
    // return Math.pow(baseNum,exponentNum)
    let a = 0;
    for (let i =  baseNum; i <= exponentNum; i++) {
        a = baseNum ** exponentNum;
    }
    return a;
}
console.log(calculateExponent(5, 5));
console.log(calculateExponent(10, 10));
console.log(calculateExponent(3, 3));

// ➞ 3125
// ➞ 10000000000
// ➞ 27