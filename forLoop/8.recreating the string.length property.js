function length(str) {
    let a = '';
    for (let i = 0; str[i] ; i++) {
        a = i+1;
    }
    return a
}
console.log(length("Hello World"));

console.log(length("Edabit"));

console.log(length("wash your hands!"));
// ➞ 11
// ➞ 6
// ➞ 16