// used to split up array elements or object properties
// Also can be used to merge the arrays with new arrays (concat)
// or merging of objects
// the new variable created is values copied not the reference
// So this can be used when we are dealing with immutable types


let newResult;
const arr = [1, 2, 3, 4, 5, 6];
newResult = [...arr, 68, 79];

const obj = {a: "sew", b: "e2ow", c: "nested prop"};
// As once the new variable gets its value
// from rest split / merge it won't chang even though the source gets changed
newResult = {...obj, a: "overriding old prop", c: "prop"};

// even though the source gets changed
obj.b = "Changed something";
obj.d = "new nested prop";

console.log(newResult, obj);
// { a: 'overriding old prop', b: 'e2ow', c: 'prop'}
// {a: 'sew', b: 'Changed something', c: 'nested prop', d: 'new nested prop'}
