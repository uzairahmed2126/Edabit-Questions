function battingAvg(games) {
  let totalHits = 0;
  let totalAtBats = 0;
  games.forEach((game) => {
    totalHits += game[0];
    totalAtBats += game[1];
  });
  const battingAverage = totalHits / totalAtBats;
  return battingAverage.toFixed(3).replace(0, "");
}
console.log(
  battingAvg([
    [0, 0],
    [1, 3],
    [2, 2],
    [0, 4],
    [1, 5],
  ])
); //➞ ".286"
console.log(
  battingAvg([
    [2, 5],
    [2, 3],
    [0, 3],
    [1, 5],
    [2, 4],
  ])
); //➞ ".350"
console.log(
  battingAvg([
    [2, 3],
    [1, 5],
    [2, 4],
    [1, 5],
    [0, 5],
  ])
); //➞ ".273"
