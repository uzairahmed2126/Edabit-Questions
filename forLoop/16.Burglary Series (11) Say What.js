function concatValues(obj) {
    let values = Object.values(obj);
    let result = '';
    for (let i = 0; i < values.length; i++) {
        result += values[i] + ' '
    };
    result += values[1]
    return result.trim();
    // const values = Object.values(object);
    // return values.join(' ') + ' ' + values[1];
};

console.log(concatValues({ 1: "Mommy", 2: "please", 3: "help" }));

console.log(concatValues({ 1: "Me", 2: "innocent", 3: "is" }));

console.log(concatValues({ 1: "Must", 2: "lawyer", 3: "call" }));

// ➞ "Mommy please help please"
// ➞ "Me innocent is innocent"
// ➞ "Must lawyer call lawyer"