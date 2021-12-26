/**
 * Objects and arrays are reference type
 * here values are stored in memory and variable
 * to whom these values are assigned is pointer
 * to memory location i.e. 'person' is reference
 * pointer
 *
 */

const person = {
  name: "jonas",
};

const someone = person; //created deep copy
const someone2 = { ...person }; //creates shallow copy by using spread operator

console.log(someone.name);

// array functions

const arr = [1, 2, 3, 4, 5, 6];
