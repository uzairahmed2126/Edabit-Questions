function makesTen(a,b){
    if(a===10||b===10){
        return true
    }else if(a+b===10){
        return true
    }else{
        return false
    }
}
console.log(makesTen(9, 10))
console.log(makesTen(9, 9))
console.log(makesTen(1, 9))