const strawHats = ["Monkey D. Luffy", "Roronoa Zoro"];
const luffy = {name: "Monkey D. Luffy", age: 21};
// Array destructuring
const [a, b] = strawHats;
console.log(a, b);

// Object destructuring

const {name} = luffy;
console.log(">>>", name);

const getName = function ([a, b]) {
  return a + " " + b;
};
getName(strawHats);

const getCaptain = ({name: captain}) => console.log(captain);

getCaptain(luffy);
