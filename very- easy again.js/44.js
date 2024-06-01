// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
function fiftyThirtyTwenty(nums) {
  const needs = nums * 0.50;
  const wants = nums * 0.30;
  const savings = nums * 0.20;
  return {
    "Needs":needs,
    "Wants":wants,
    "Saving":savings
  }
}
console.log(fiftyThirtyTwenty(10000)); //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)); //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)); //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
// Notes
// N/A
