function futurePeople(population,n){
    const totalMonthsInThreeDecades = 30*12
    const totalPeopleBorn = totalMonthsInThreeDecades*n
    const futurePopulation = population+totalPeopleBorn
    return futurePopulation
}
console.log(futurePeople(256, 2) )

console.log(futurePeople(3248, 6) )

console.log(futurePeople(5240, 3) )