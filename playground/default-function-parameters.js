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
};

// without default function parameters
function woFP(pirates) {
  if (!Array.isArray(pirates)) {
    pirates = ['woFP'];
  }
  return pirates.join(", ");
}

// With default function parameters
function getPirates(pirates = ['Works!']) {
  return pirates.join(", ");
}

console.log(woFP());
console.log(getPirates());
console.log(getPirates(strawHats.pirates));
