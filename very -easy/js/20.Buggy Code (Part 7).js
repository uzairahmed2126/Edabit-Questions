function swap(...num){
    // return Array.of(n1,n2).reverse()
    // return Array.of(n2,n1)
    // return Array.of(...num).reverse()
    return Array.of(arguments[1],arguments[0])
}
console.log(swap(100, 200))
console.log(swap(44, 33))
console.log(swap(21, 12))
