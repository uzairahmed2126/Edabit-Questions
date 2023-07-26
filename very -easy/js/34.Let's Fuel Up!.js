function calculateFuel(distance) {
  //  return (distance*10) < 100 ? 100 : distance*10
  const requiredFuel = distance * 10
  return Math.max(requiredFuel, 100)
}

console.log(calculateFuel(15))

console.log(calculateFuel(23.5))

console.log(calculateFuel(3))
