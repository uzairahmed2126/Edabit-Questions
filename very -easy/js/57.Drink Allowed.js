function shouldServeDrinks(age,isDrink){
    // if(age>18){
    //     if(age<30){
    //         return true
    //     }
    // }
    // return false
    return age>=18 && !isDrink
}
console.log(shouldServeDrinks(17, true))

console.log(shouldServeDrinks(19, false))

console.log(shouldServeDrinks(30, true))
