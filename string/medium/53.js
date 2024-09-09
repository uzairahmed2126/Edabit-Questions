// // Clear the Fog
// // Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

// // Examples
function clearFog(str) {
  if (!str.includes("fog")) {
    return "It's a clear day!";
  }
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let lowercase = str.toLowerCase();
    if (lowercase[i] !== "f" && lowercase[i] !== "o" && lowercase[i] !== "g") {
      res += lowercase[i];
    }
  }
  return res;
}
console.log(clearFog("sky")); // "It's a clear day!"
console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog")); // "trees"
console.log(clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog")); // "birdsandthebees"
// // Notes
// // Hidden words won't include the letters f, o or g.
// // Hidden words are always in lowercase.
