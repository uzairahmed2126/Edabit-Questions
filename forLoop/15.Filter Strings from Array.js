function integerBoolean(str) {
    let a = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            a.push(true)
        } else {
            a.push(false)
        }
    }
    return a;
}

console.log(integerBoolean("100101"));

console.log(integerBoolean("10"));

console.log(integerBoolean("001"));

// ➞ [true, false, false, true, false, true]
// ➞ [true, false]
// ➞ [false, false, true]