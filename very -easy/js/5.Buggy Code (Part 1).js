function cubes(cubeValue) {
  //    return arguments[0] **3
  // return arguments[0].
  // return Math.pow(arguments[0], 3)
  let a = 0; 
  for (let i = 1; i <= cubeValue; i++) {
    a = i*i*i;
  }
  return a;
}
console.log(cubes(3))

console.log(cubes(5))

console.log(cubes(10))
