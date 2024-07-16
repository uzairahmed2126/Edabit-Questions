// Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

// Examples
function profit(obj) {
  const { sellPrice, costPrice, inventory } = obj;
  return Math.ceil((sellPrice - costPrice) * inventory);
}
console.log(
  profit({
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 1200,
  })
); //➞ 14796

console.log(
  profit({
    costPrice: 225.89,
    sellPrice: 550.0,
    inventory: 100,
  })
); //➞ 32411

console.log(
  profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500,
  })
); //➞ 44030
// Notes
// Assume all inventory has been sold.
// Profit = Total Sales - Total Cost
