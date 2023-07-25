function and(){
    return arguments[0]&&arguments[1]
}
console.log(and(true, false))
console.log(and(true, true))
console.log(and(false, true))
console.log(and(false, false))
