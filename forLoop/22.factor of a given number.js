function findFactors(factorNum) {
    let result = [];
    for (let i = 1; i <= factorNum; i++) {
        if (factorNum % i == 0) {
            result.push(i);
        };
    };
    return result;
};

console.log(findFactors(9));
// 9 has three factors 1, 3 and 9

console.log(findFactors(12));

console.log(findFactors(20));

console.log(findFactors(0));
// 0 has no factors

// ➞ [1, 3, 9]
// ➞ [1, 2, 3, 4, 6, 12]
// ➞ [1, 2, 4, 5, 10, 20]
// ➞ []