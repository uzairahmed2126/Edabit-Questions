// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples
function afterNYears(ages, n) {
  const years = Math.abs(n);
  let value = Object.keys(ages);
  for (let i = 0; i < value.length; i++) {
    ages[value[i]] += years;
  }
  return ages;
  //   let age = Object.values(ages);
  //   let names = Object.keys(ages);
  //   for (let i = 0; i < age.length; i++) {
  //     Object.assign({ names }, age[i] + n);
  //     // ages[names[i]] = age[i] + n;
  //   }
  //   return names;
}
console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
); //➞ {"Joel" : 33,  "Fred" : 45,"Reginald" : 66,"Susan" : 34,"Julian" : 14}

console.log(
  afterNYears(
    {
      Baby: 2,
      Child: 8,
      Teenager: 15,
      Adult: 25,
      Elderly: 71,
    },
    19
  )
); //➞ {"Baby" : 21,"Child" : 27,"Teenager" : 34,"Adult" : 44,"Elderly" : 90}

console.log(
  afterNYears(
    {
      Genie: 1000,
      Joe: 40,
    },
    5
  )
); //➞ {"Genie" : 1005,"Joe" : 45}
// Notes
// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
