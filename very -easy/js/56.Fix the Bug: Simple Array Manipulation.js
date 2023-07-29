function incrementItems(arr){
    for (let index = 0; index < arr.length; index++) {
         arr[index]++
    }
    return arr

}
console.log(incrementItems([0, 1, 2, 3]) )

console.log(incrementItems([2, 4, 6, 8]) )

console.log(incrementItems([-1, -2, -3, -4]) )