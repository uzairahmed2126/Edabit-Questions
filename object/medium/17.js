// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
class Name {
  constructor(fname, lname) {
    this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
    this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    this.fullname = `${this.fname} ${this.lname}`;
    this.initials = `${this.fname[0]}.${this.lname[0]}`;
  }
}
a1 = new Name("john", "SMITH");
console.log(a1.fname); //➞ "John"
console.log(a1.lname); //➞ "Smith"
console.log(a1.fullname); //➞ "John Smith"
console.log(a1.initials); //➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.
