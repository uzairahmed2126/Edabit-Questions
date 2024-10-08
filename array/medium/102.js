// Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

// Examples
function convertToNumber(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, Number(value)])
  );
  //   for (const key in obj) {
  //     obj[key] = +obj[key];
  //   }
  //   return obj;
}
console.log(convertToNumber({ piano: "200" })); //➞ { piano: 200 }

console.log(convertToNumber({ piano: "200", tv: "300" })); //➞ { piano: 200, tv: 300 }

console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); //➞ { piano: 200, tv: 300, stereo: 400 }
// Notes
// N/A
