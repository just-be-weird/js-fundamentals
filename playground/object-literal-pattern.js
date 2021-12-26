const pirates = [
  "Monkey D. Luffy",
  "Roronoa Zoro",
  "Nami",
  "Sanji",
  "Tony Tony Chopper",
  "Franky",
  "Brook",
  "Jinbe",
  "Nefertari Vivi",
];
const captain = "Monkey D. Luffy";

const getPirates = () => pirates.push(', ');

// Creating new object with shorthand
const strawHats = {
  captain,
  pirates,
  // shorthand for arrow functions
  getPirates,
  // shorthand for vanilla functions
  getCaptainName() {
    return captain;
  },
};

pirates.push("marry");

console.log(strawHats.getCaptainName());
