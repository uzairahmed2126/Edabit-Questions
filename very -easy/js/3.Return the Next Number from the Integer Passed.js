function addition(num) {
  let result = 0;
  for (let i = 0; i <= Math.abs(num); i++) {
    result = num >= 0 ? i + 1 : 1 - i;
  }
  return result;
}
console.log(addition(0)) //output 1
console.log(addition(9))//output 10
console.log(addition(-3)) //output -2
