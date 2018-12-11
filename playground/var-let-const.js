//var 
var name = 'John Doe';//defining var and assinging a value to it 
console.log(name);// using it 



//The let statement declares a block scope local variable, optionally initializing it to a value.

let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);// expected output: 2
}
console.log(x);// expected output: 1


// Const are block-scoped, and value of a constant cannot change through reassignment, and it can't be redeclared.

const constEx = { name: 'John Silver'};
//constEx = { age: 34};//error for reassignment 
constEx.age = 34; //same goes for array variables
console.log(constEx);
