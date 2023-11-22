function makeRug(m, n, str = '#') {
    let result = [];
    for (let i = 0; i < m; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (str == undefined) {
                row += str;
            };
            row += (str);
        };
        result.push(row);
    };
    return result;
};
console.log(makeRug(3, 5));

console.log(makeRug(3, 5, '$'));

console.log(makeRug(2, 2, 'A'));

//   ➞[
//     "#####",
//     "#####",
//     "#####"
// ]
// ➞[
//     "$$$$$",
//     "$$$$$",
//     "$$$$$"
// ]
// ➞[
//     "AA",
//     "AA"
// ]