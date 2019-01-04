/**
 * cons:    this ref to correct block
 * 
 * */ 

 function oldFunctionDef(arg) {
     console.log('some complex logic');
 }

 const newArrowFunc = (arg) => {
    console.log(arg);
 }

 export const sqr = (x) => x*x;
 newArrowFunc('js code..');
 console.log(sqr(3));