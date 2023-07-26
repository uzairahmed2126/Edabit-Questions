function calculator(expression) {
  try {
    return eval(expression)
  } catch (error) {
    console.error('Error: Invalid expression')
    return NaN
  }
}
console.log(calculator('23+4'))
console.log(calculator('45-15'))
console.log(calculator('13+2-5*2'))
console.log(calculator('49/7*2-3'))

// eval method are not safe it's a malicious code it can run inside your application without permission
