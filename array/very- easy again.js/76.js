// Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Examples
function birthdayCakeCandles(candles) {
  let maximum = Math.max(...candles);
  let count = candles.filter((element) => maximum === element);
  return count.length;
  //   for (let i = 0; i < candles.length; i++) {
  //     if (!candles.indexOf(candles[i])) {
  //       count++;
  //     }
  //   }

  //   candles.forEach((item) => {
  //     if (!candles.indexOf(item)) {
  //       count++;
  //     }
  //   });
  //   return count;
}
console.log(birthdayCakeCandles([4, 4, 1, 3])); //➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.
console.log(birthdayCakeCandles([3, 2, 1, 3])); //➞ 2
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])); //➞ 4
// Notes
// N/A
