function makePair(num1, num2) {
    // return [num1, num2]
    // return Array.from(arguments);
    // return [...arguments]
    let reuslt = [];
    for (let i = 0; i < arguments.length; i++) {
        reuslt.push(arguments[i])
    }
    return reuslt;
}
console.log(makePair(1, 2)); //➞ [1, 2]

console.log(makePair(51, 21)); //➞ [51, 21]

console.log(makePair(512124, 215)); //➞ [512124, 215]