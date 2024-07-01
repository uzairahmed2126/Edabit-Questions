// Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// Examples
class sportsPlayer {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  getAge() {
    return this.name + " age is " + this.age;
  }
  getHight() {
    return this.name + " is " + this.height;
  }
  getWeight() {
    return this.name + " weighs " + this.weight;
  }
}
let p1 = new sportsPlayer("David Jones", 25, 175, 75);
console.log(p1.getAge());
console.log(p1.getHight());
console.log(p1.getWeight());
//  (p1.getAge()) //➞ "David Jones is age 25"
//  (p1.getHeight()) //➞ "David Jones is 175cm"
//  (p1.getWeight()) //➞ "David Jones weighs 75kg"
// Notes
// name will be passed in as a string and age, height and weight will be integers.
