// Barbecue Skewers
// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

// ["--xo--x--ox--",
// "--xx--x--xx--",
// "--oo--o--oo--",      <<< vegetarian skewer
// "--xx--x--ox--",
// "--xx--x--ox--"]
// Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].

// Examples
function bbqSkewers(skewer) {
  return skewer.reduce(
    (acc, cur) => {
      let splited = cur.split("");
      if (splited.includes("o") && !splited.includes("x")) {
        acc[0]++;
      } else {
        acc[1]++;
      }
      return acc;
    },
    [0, 0]
  );
  //   let vegetarianSkewer = 0;
  //   let nonVegetarianSkewer = 0;
  //   for (let i = 0; i < skewer.length; i++) {
  //     let splited = skewer[i].split("");
  //     if (splited.includes("o") && !splited.includes("x")) {
  //       vegetarianSkewer++;
  //     } else {
  //       nonVegetarianSkewer++;
  //     }
  //   }
  //   return [vegetarianSkewer, nonVegetarianSkewer];
}
console.log(
  bbqSkewers([
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--",
  ])
); //➞ [2, 3]

console.log(
  bbqSkewers([
    "--oooo-ooo--",
    "--xxxxxxxx--",
    "--o---",
    "-o-----o---x--",
    "--o---o-----",
  ])
); //➞ [3, 2]
// Notes
// N/A
