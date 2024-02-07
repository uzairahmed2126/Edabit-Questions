function seriesResistance(resistances) {
    // let result = 0;
    // let finalResult = '';
    // resistances.map(function (item) { result += item })
    // if (result <= 1) {
    //     return finalResult.concat(`${result} ohm`);
    // }
    // return finalResult.concat(`${result} ohms`);
    const totalResistance = resistances.reduce((acc, resistance) => acc + resistance, 0);
    if (totalResistance <= 1) {
        return `${totalResistance} ohm`;
    }
    return `${totalResistance} ohms`;
}

console.log(seriesResistance([1, 5, 6, 3])); //➞ "15 ohms"
console.log(seriesResistance([16, 3.5, 6])); //➞ "25.5 ohms"
console.log(seriesResistance([0.5, 0.5])); //➞ "1.0 ohm