/**
 * Primitive Data type
 *  *Stored directly in the location the variable access
 *  *Stored on the stack
 * 
 * ------------------------------------
 *  String
 *  Number
 *  Boolean
 *  Null            const car = null -> typeof car -> Object    !!!
 *  Undefied
 *  Symbols(ES6)    const sym = Symbol()
 */

 /**
 * Reference type
 *  *Accessed by reference
 *  *Objects that are stored on the heap
 *  *A pointer to a location in mermory
 * 
 * ------------------------------------
 *  Arrays      typeof anyarray returns object
 *  Object Literals
 *  Functions
 *  Dates
 *  Anything Else
 */

//  --- Type Conversion to String---
let val;

// Number to string 
val = String(555);// we can also use toString() =>  (555).toString()
val = String(5+12);

// Bool to string
val = String(true);//(true).toString()

// Date to string
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

//  --- Type Conversion to Number---
val = Number(555);// 555
val = Number(true);// 1
val = Number(false);// 0
val = Number(null);// 0
val = Number(undefined);// NaN
val = Number('hello');// NaN
val = Number([1,2,3,4]);//NaN

// we can also use      parseInt(), parseFloat() for conversion

//Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

//  --- Type Coversion is done by JS ---

const val1 = 5;
const val2 = '6';
const sum = val1+val2;
//Output
console.log(sum);//56
console.log(typeof sum);//string
