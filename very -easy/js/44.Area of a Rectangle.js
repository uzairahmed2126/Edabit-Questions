function area(length,width){
    const a = length*width
    return a <= 0 ? -1 : a
}
console.log(area(3, 4))
console.log(area(10, 11))
console.log(area(-1, 5))
console.log(area(0, 2))
