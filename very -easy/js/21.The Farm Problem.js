function animals(chickens, cows, pigs) {
  //   return chickens[0] * 2 + cows[1] * 4 + pigs[2] * 4
  const legs = [chickens * 2, cows * 4, pigs * 4]
  return legs.reduce(
    (accumulator, currentValue) => accumulator + currentValue,0
  )
}
console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))
