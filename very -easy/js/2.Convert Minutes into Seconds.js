function convert(minutes) {
    for (let i = 1; i <= minutes; i++) {
        return minutes * 60;
    };
    //  return arguments[0] * 60
    // return Number(arguments[0] * 60)
};

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))
