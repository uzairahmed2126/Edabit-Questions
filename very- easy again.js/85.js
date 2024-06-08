// Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples
function ageDifference(ages) {
  ages.sort((a, b) => b - a);
  let parent1 = ages[0];
  let parent2 = ages[1];
  let difference = parent1 - parent2;
  return difference === 0
    ? "No age difference between spouses."
    : `${difference} years`;
}
console.log(ageDifference([29, 1, 6, 8, 28])); //➞ "1 year"
console.log(ageDifference([43, 86, 49, 86])); //➞ "No age difference between spouses."
console.log(ageDifference([2, 4, 6, 32, 27])); //➞ "5 years"
// Notes
// Note the singular "year".
// The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
// The age difference between spouses will not be more than 18 years.
