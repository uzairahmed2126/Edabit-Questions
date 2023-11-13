function length(str) {
    let count = 0;
    for (let i = 0; i = str[count] !== undefined; i++) {
        count += i ;
    }
    return count;
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));
