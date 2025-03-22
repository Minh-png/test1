person = {
  firstname: "Minh",
  lastname: "Mai",
  hair: "brown",
};

person2 = {
  firstname: "Manh",
  lastname: "Van",
  hair: " black",
};
person.gender = "Male";
person["occupation"] = "Developer";
if ("gender" in person) {
  console.log("Gender is a property of person object");
} else {
  console.log("Gender is not a property of person object");
}
if (person.hasOwnProperty("occupation")) {
  console.log("Occupation is a property of person object");
}
delete person.hair;
delete person["occupation"];
for (let key in person) {
  console.log(key + " : " + person[key]);
}
for (let key in person2) {
  console.log(key + " : " + person2[key]);
}
