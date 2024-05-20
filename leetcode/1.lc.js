// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

var fibGenerator = function* () {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};
function generateFibonacci(count) {
  const fibSequence = [];
  const gen = fibGenerator();
  for (let i = 0; i < count; i++) {
    fibSequence.push(gen.next().value);
  }
  return fibSequence;
}
console.log(generateFibonacci(4))
// Example 1:

// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// Example 2:

// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted
