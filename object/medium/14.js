// Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

// Examples
function obj(value) {
  let key = Object.keys(value);
  if (key.includes("timmy")) {
    return "Timmy is gone...";
  }
  return "Timmy is here!";
}
console.log(
  obj({
    tv: 30,
    timmy: 20,
    stereo: 50,
  })
); //➞ "Timmy is gone..."
// Timmy is in the object.
console.log(
  obj({
    tv: 30,
    stereo: 50,
  })
); //➞ "Timmy is here!"
// Timmy is not in the stolen list object.
console.log(obj({})); //➞ "Timmy is here!"
// Timmy is not in the object.
// Notes
// N/A
