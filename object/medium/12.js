// Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// Examples
// function freeShipping(products) {
//   const arr = Object.values(products);
//   let total = arr.reduce((acc, cur) => acc + cur);
// return 50 <= total;
// }
function freeShipping(products) {
  const arr = Object.entries(products).flat();
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }
  return 50 <= total;
}
console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 })); //➞ false
console.log(freeShipping({ "Flatscreen TV": 399.99 })); //➞ true
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
); //➞ true
// Notes
// Ignore tax or additional fees when calculating the total order cost.
