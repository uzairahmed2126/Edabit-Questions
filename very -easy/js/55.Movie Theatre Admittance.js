function acceptIntoMovie(age,isSupervised){
    // if(age>15||isSupervised===true){
    //     return true
    // }else{
    //    return false
    // }
    return age>15 || isSupervised
}
console.log(acceptIntoMovie(14, true))

console.log(acceptIntoMovie(14, false))

console.log(acceptIntoMovie(16, false))