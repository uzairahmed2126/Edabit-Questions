// Rounding in Millions
// Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

// Examples
function millionsRounding(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let cities = arr[i][0];
    let totalPopulation = 1000000;
    let population = arr[i][1];
    result.push(cities);
    if (population) {
      result.push(Math.round(population / totalPopulation) * totalPopulation);
    }
  }
  return result;
}
function millionsRounding(arr) {
  return arr.map((item) => {
    let population = item[1];
    let cities = item[0];
    const totalPopulation = Math.round(population / 1000000) * 1000000;
    return [cities, totalPopulation];
  });
}
console.log(
  millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572],
  ])
  //  [(["Nice", 1000000],["Abu Dhabi", 1000000],["Naples", 2000000],["Vatican City", 0])]
);
// Notes
// Round down to 0 if a population is below 500,000.
