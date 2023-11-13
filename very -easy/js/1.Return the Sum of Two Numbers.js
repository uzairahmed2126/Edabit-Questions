function addition(num1, num2) {
    // if(Number.isInteger){
    //      return num1+num2
    // }
    // return num1 + num2
    // return arguments[0] + arguments[1]
    // return Number(+num1+num2)
    // return Number.isInteger(num1,num2)
    let a = 0;
    for (let i = 1; i <= addition.length; i++) {
        a = num1 + +num2;
    }
    return a;
}
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, '3'))