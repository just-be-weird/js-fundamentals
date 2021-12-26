let result;

const strawHats = {
  captain: "Monkey D. Luffy",
  pirates: [
    "Monkey D. Luffy",
    "Roronoa Zoro",
    "Nami",
    "Sanji",
    "Tony Tony Chopper",
    "Franky",
    "Brook",
    "Jinbe",
    "Nefertari Vivi",
  ],
  getCaptainWithFn: function () {
    return this;
  },
  getCaptainWithArrowFn: () => {
    return this;
  },
  getCaptain: function () {
    setTimeout(() => {
      console.log(this.captain)
    }, 1000);
  },
};

const pirates = [strawHats];

// This is how we do with old vanilla js function
result = pirates.map(function (pirate) {
  return pirate.captain;
});

// this is how we do with arrow function
result = pirates.map((pirate) => {
  return pirate.captain;
});

// Implicit return arrow function
// --> use this when we have only one line in arrow body
result = pirates.map((pirate) => pirate.captain);

console.log(strawHats.getCaptainWithFn()); // logs strawHats object
console.log(strawHats.getCaptainWithArrowFn()); // logs window object

// another popular use case
console.log(strawHats.getCaptain()); // logs Monkey D. Luffy after a sec
