// Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples
function firstPlace(road) {
  let chars = road.split("");
  let cars = road.replace(/[^a-zA-Z]/g, "");
  if (road === "") {
    return "No road available";
  }
  if (cars === "") {
    return "No cars available";
  }
  let res = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] !== "=") {
      res += chars[i];
    }
  }
  let firstCar = res[0];
  return firstCar;
}
console.log(firstPlace("====b===O===e===U=A==")); //➞ "A"

console.log(firstPlace("e==B=Fe")); //➞ "e"

console.log(firstPlace("proeNeoOJGnfl")); //➞ "l"
console.log(firstPlace("==")); //➞ "No car available"
console.log(firstPlace("")); //➞ "No road available"
// Notes
// Return "No car available" if there is no car on the road and "No road available" if there is no road.
