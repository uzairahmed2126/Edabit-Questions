// Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// Examples
// function winRound(arr1, arr2) {
//   let cards1 = arr1.sort((a, b) => a - b);
//   let cards2 = arr2.sort((a, b) => a - b);
//   let firstCards = cards1[cards1.length - 1] + "" + cards1[cards1.length - 2];
//   let secondCards = cards2[cards2.length - 1] + "" + cards2[cards2.length - 2];
//   return firstCards > secondCards;
// }
function winRound(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - 1; j++) {
      if (arr1[j] < arr1[j + 1]) {
        [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
      }
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr2[j] < arr2[j + 1]) {
        [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
      }
    }
  }
  let firstCardsTotal = arr1.slice(0, 2).join("");
  let secondCardsTotal = arr2.slice(0, 2).join("");
  return firstCardsTotal > secondCardsTotal;
}
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); //➞ true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); //➞ true
console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])); //➞ false
console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])); //➞ false
// Notes
// Return false if you and your opponent reach the same maximum number (see example #4).
