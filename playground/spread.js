//used to split up array elements or object properties

let newResult;
const arr = [1,2,3,4,5,6];
newResult = [...arr,68,79]

const obj = { a: 'sew', b: 'e2ow'}
newResult = {...obj, a:'overriding old prop', c: 'new prop'};                       

console.log(newResult,obj);


