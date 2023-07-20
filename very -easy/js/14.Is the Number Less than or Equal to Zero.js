function lessThanOrEqualToZero(num){
    // if(arguments[0]<=0){
    //     return true
    // }
    // return false
    // return num <=0
    return num ? num <= 0 : true
}
console.log(lessThanOrEqualToZero(5) )
console.log(lessThanOrEqualToZero(0) )
console.log(lessThanOrEqualToZero(-2) )