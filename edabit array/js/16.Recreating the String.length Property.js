function length(str) {
    let count = 0
    for (let char=0;str[char]!==undefined; char++) {
        count++
    }
    return count
}

console.log(length("Hello World"))

console.log(length("Edabit"))

console.log(length("wash your hands!"))
