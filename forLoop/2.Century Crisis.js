function futurePeople(population, n) {
    const threeDecades = 30 * 12;
    for (let i = 1; i <= 360; i++) {
        population += n;
    }
    return population;
}
console.log(futurePeople(256, 2));
console.log(futurePeople(3248, 6));
console.log(futurePeople(5240, 3));

// ➞ 976
// ➞ 5408
// ➞ 6320