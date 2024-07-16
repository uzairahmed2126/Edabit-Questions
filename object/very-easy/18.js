// Find the Bug: Returning Valid Units of Measure
// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

// Expected results
function hasValidUnitOfMeasure(product) {
  const validUnits = ["L", "PCE"];
  return (
    validUnits.includes(product.unitOfMeasure) || product.comment !== undefined
  );
  //   if (obj.unitOfMeasure === "L") {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
console.log(hasValidUnitOfMeasure({ product: "Milk", unitOfMeasure: "L" })); //➞ true
console.log(hasValidUnitOfMeasure({ product: "Cereals", unitOfMeasure: "" })); //➞ false
console.log(hasValidUnitOfMeasure({ product: "Beer", unitOfMobeasure: false })); //➞ false
console.log(hasValidUnitOfMeasure({ product: "Beef", unitOfMeasure: "Cow" })); //➞ false
// Notes
// Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
// Why is eggs not returning a boolean?
// When merging conditions through ||, the returned value is the result of the last truthy condition.
