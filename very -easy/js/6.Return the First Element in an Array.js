function getFirstValue(firstValue) {
    // return arguments[0][0]
    // return firstValue[0]
    // return Number(arguments[0][0])
    // return arguments[0][0]
    let a = 0;
    for (let i = 0; i <= firstValue.length; i++) {
        a = firstValue[0]
    }
    return a;
}

console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))
