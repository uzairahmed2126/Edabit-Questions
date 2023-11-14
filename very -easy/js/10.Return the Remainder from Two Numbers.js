function remainder(first, second) {
    // return divide[0]%divide[1]
    // return Number.parseInt(divide[0]%divide[1])
    // return Math.floor(divide[0] % divide[1]);
    let a = 0;
    a = first % second;
    return a
}
console.log(remainder(1, 3)) //1
console.log(remainder(3, 4)) //3
console.log(remainder(-9, 45)) //-9
console.log(remainder(5, 5)) //0

// let a = function remainder(){
//     return arguments[0]%arguments[1]
// }
// console.log(a(1, 3)) //1
// console.log(a(3, 4)) //3
// console.log(a(-9, 45)) //-9
// console.log(a(5, 5)) //0
