function arrayValuesTypes(array) {
    return array.map(function(value) {
      return console.log(typeof value);
    });
  }
  

arrayValuesTypes([1, 2, "null", []])

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])