//used to merge a list of functions arguments into a array

function sortArgs(...args) {
    return args.sort();
}

console.log(sortArgs(2,7,1,3,99,4));
