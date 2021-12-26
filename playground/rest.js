// This allows us to pass n number of arguments into a single variable
// This variable will be an array

function sortArgs(...args) {
  return args.sort();
}

console.log(sortArgs(2, 7, 1, 3, 99, 4));

function sortArgsWithLabel(label, ...args) {
  console.log(label);

  return args.sort();
}

// arguments --> which is comes with default javascript
// is an array, where arguments are mapped with array like structure
// { 0: 'Sorted numbers', 1: 2, 2: 7..}
// Now to use any value we need to use index to access it
// --> arguments[0] to get the first parameter

console.log(sortArgsWithLabel("Sorted numbers", 2, 7, 1, 3, 99, 4));
