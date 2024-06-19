// Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples
function seriesResistance(circuits) {
  //   let count = 0;
  //   for (let i = 0; i < circuits.length; i++) {
  //     count += circuits[i];
  //   }
  //   return count <= 1 ? count.toFixed(1) + " ohm" : count + " ohms";
  let total = circuits.reduce((acc, cur) => acc + cur);
  return total <= 1 ? total.toFixed(1) + " ohm" : total + " ohms";
}
console.log(seriesResistance([1, 5, 6, 3])); //➞ "15 ohms"
console.log(seriesResistance([16, 3.5, 6])); //➞ "25.5 ohms"
console.log(seriesResistance([0.5, 0.5])); //➞ "1.0 ohm"
// Notes
// All inputs will be valid.
// Notice the singular ohm for values <= 1.
// This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.
