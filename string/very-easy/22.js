// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
function relationToLuke(str) {
  const checkVal = str.trim().toLowerCase();
  if (checkVal === "darth vader") {
    return "Luke, I am your father.";
  } else if (checkVal === "leia") {
    return "Luke, I am your sister.";
  } else if (checkVal === "han") {
    return "Luke, I am your brother in law.";
  }
  return "I don't know who you are";
}
console.log(relationToLuke("Darth Vader")); //➞ "Luke, I am your father."
console.log(relationToLuke("Leia")); //➞ "Luke, I am your sister."
console.log(relationToLuke("Han")); //➞ "Luke, I am your brother in law."
// Notes
// N/A
